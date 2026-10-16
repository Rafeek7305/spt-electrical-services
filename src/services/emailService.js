/**
 * Email Service for S.P.T. Electrical Services
 * Sends customer enquiries to starrabik76@gmail.com via EmailJS REST API.
 * Uses native fetch with zero extra npm dependencies.
 *
 * Security & Anti-Spam:
 * - Strips CR/LF characters from single-line fields to prevent header injection.
 * - Honeypot detection to silently drop automated bot spam.
 * - Uses EmailJS Public Key designed for browser client execution.
 * - Never logs customer Personal Identifiable Information (PII) in production.
 */

const DEFAULT_SERVICE_ID = 'service_1s224ki';
const DEFAULT_TEMPLATE_ID = 'template_lw8aer2';
const DEFAULT_PUBLIC_KEY = 'S6mipfqaFQy9JgG7M';
const RECIPIENT_EMAIL = 'starrabik76@gmail.com';

/**
 * Sanitizes single-line fields (strips newlines, carriage returns, and excessive whitespace)
 * to prevent header injection attacks.
 */
export const sanitizeSingleLine = (str = '') => {
  return String(str)
    .replace(/[\r\n\t]+/g, ' ')
    .trim();
};

/**
 * Validates phone number format (requires at least 10 digits).
 */
export const isValidPhone = (phone = '') => {
  const digitsOnly = String(phone).replace(/\D/g, '');
  return digitsOnly.length >= 10;
};

/**
 * Validates email format if provided.
 */
export const isValidEmail = (email = '') => {
  if (!email || !String(email).trim()) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).trim());
};

/**
 * Formats submission timestamp in Indian Standard Time (IST).
 */
export const getFormattedTimestamp = () => {
  try {
    return new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short'
    }).format(new Date());
  } catch {
    return new Date().toLocaleString();
  }
};

/**
 * Checks whether EmailJS credentials are fully configured.
 */
export const isEmailServiceConfigured = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || DEFAULT_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || DEFAULT_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || DEFAULT_PUBLIC_KEY;

  return Boolean(
    serviceId &&
    templateId &&
    publicKey &&
    !serviceId.includes('your_') &&
    !templateId.includes('your_') &&
    !publicKey.includes('your_')
  );
};

/**
 * Sends an enquiry email to starrabik76@gmail.com.
 *
 * @param {Object} data
 * @param {string} data.fullName - Customer's full name (required)
 * @param {string} data.phone - Customer's phone number (required)
 * @param {string} [data.email] - Customer's email (optional)
 * @param {string} data.service - Required electrical service (required)
 * @param {string} [data.location] - Location / Area (optional)
 * @param {string} [data.message] - Work details / notes (optional on modal, required on contact page)
 * @param {string} [data.formType] - Origin form identifier ('Get a Service' or 'Send Enquiry')
 * @param {string} [data.formSource] - Alias for formType
 * @param {string} [data.honeypot] - Bot trap field (must be empty)
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
export const sendEnquiryEmail = async ({
  fullName = '',
  phone = '',
  email = '',
  service = '',
  location = '',
  message = '',
  formType = '',
  formSource = '',
  honeypot = ''
}) => {
  // 1. Honeypot check - silently discard bot submissions
  if (honeypot && String(honeypot).trim().length > 0) {
    // Pretend success so bot doesn't retry
    return { success: true };
  }

  // 2. Input validation & sanitization
  const cleanName = sanitizeSingleLine(fullName);
  const cleanPhone = sanitizeSingleLine(phone);
  const cleanService = sanitizeSingleLine(service);
  const cleanLocation = sanitizeSingleLine(location);
  const cleanEmail = email ? sanitizeSingleLine(email) : '';
  const cleanMessage = String(message || '').trim();
  const effectiveFormType = formType || formSource || 'General Enquiry';

  if (!cleanName) {
    return { success: false, error: 'Please enter your Full Name.' };
  }

  if (!isValidPhone(cleanPhone)) {
    return { success: false, error: 'Please enter a valid Phone Number (minimum 10 digits).' };
  }

  if (cleanEmail && !isValidEmail(cleanEmail)) {
    return { success: false, error: 'Please enter a valid Email Address or leave it empty.' };
  }

  if (!cleanService) {
    return { success: false, error: 'Please select a required service.' };
  }

  // 3. Resolve configuration
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || DEFAULT_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || DEFAULT_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || DEFAULT_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return {
      success: false,
      error: 'Enquiry service is currently being configured. Please call us directly at +91 94869 39201 or message us on WhatsApp.'
    };
  }

  // 4. Construct template parameters matching requested EmailJS template variables
  const submissionTime = getFormattedTimestamp();
  const hasValidEmail = isValidEmail(cleanEmail);

  // Safely handle optional fields when empty
  const safeEmail = cleanEmail || 'Not provided';
  const safeLocation = cleanLocation || 'Not provided';
  const safeMessage = cleanMessage || 'No additional details provided';

  const templateParams = {
    // Primary requested template variables
    form_type: effectiveFormType,
    customer_name: cleanName,
    phone: cleanPhone,
    customer_email: safeEmail,
    service: cleanService,
    location: safeLocation,
    message: safeMessage,
    submitted_at: submissionTime,

    // Useful aliases to ensure compatibility with various template placeholders
    to_email: RECIPIENT_EMAIL,
    reply_to: hasValidEmail ? cleanEmail : RECIPIENT_EMAIL,
    from_name: cleanName,
    phone_number: cleanPhone,
    service_required: cleanService,
    submission_time: submissionTime,
    form_source: effectiveFormType,
    subject: `New Service Enquiry — S.P.T. Electrical Services (${cleanService})`
  };

  // 5. Send payload to EmailJS REST API
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams
      })
    });

    if (response.ok) {
      return { success: true };
    }

    const errorText = await response.text();
    console.error('[EmailJS Error]', errorText);

    if (errorText.toLowerCase().includes('invalid grant') || errorText.toLowerCase().includes('reconnect')) {
      return {
        success: false,
        error: 'Email service notice: Please reconnect your Gmail account in your EmailJS dashboard (service_1s224ki). Or reach us directly at +91 94869 39201.'
      };
    }

    return {
      success: false,
      error: errorText || 'Unable to submit enquiry right now. Please call us directly at +91 94869 39201.'
    };
  } catch {
    return {
      success: false,
      error: 'Network error. Please check your internet connection or call +91 94869 39201.'
    };
  }
};

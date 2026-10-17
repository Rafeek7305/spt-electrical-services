/**
 * Email Service for S.P.T. Electrical Services
 * Sends customer enquiries to starrabik76@gmail.com and s.udaiyar8080@gmail.com via EmailJS REST API.
 * Uses native fetch with zero extra npm dependencies.
 *
 * Core 5 Fields (Required on all forms):
 * 1. Full Name (customer_name)
 * 2. Phone Number (phone)
 * 3. Area / Location (location / area)
 * 4. Service Required (service)
 * 5. Brief Description of Work (message / description)
 */

export const DEFAULT_SERVICE_ID = 'service_1s224ki';
export const DEFAULT_TEMPLATE_ID = 'template_lw8aer2';
export const DEFAULT_PUBLIC_KEY = 'S6mipfqaFQy9JgG7M';
export const PRIMARY_RECIPIENT_EMAIL = 'starrabik76@gmail.com';
export const SECONDARY_RECIPIENT_EMAIL = 's.udaiyar8080@gmail.com';
export const RECIPIENT_EMAILS = [PRIMARY_RECIPIENT_EMAIL, SECONDARY_RECIPIENT_EMAIL];
export const RECIPIENT_EMAIL = `${PRIMARY_RECIPIENT_EMAIL}, ${SECONDARY_RECIPIENT_EMAIL}`;

/**
 * Shared standardized service options across every enquiry form.
 */
export const SERVICE_OPTIONS = [
  'Electrical Installation',
  'Wiring & Rewiring',
  'Electrical Repairs',
  'Distribution Board / Panel Work',
  'Lighting Installation',
  'Electrical Maintenance',
  'Commercial Electrical Work',
  'Other Electrical Service'
];

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
 * Validates Indian mobile numbers:
 * - 10 digits starting with 6, 7, 8, or 9
 * - 11 digits starting with 0, followed by a valid 10-digit mobile number (e.g. 09486939201)
 * - 12 digits starting with country code 91, followed by a valid 10-digit mobile number (e.g. +91 94869 39201, 919486939201)
 * - Allows spaces, hyphens, parentheses, and a leading plus sign.
 * - Rejects any numbers not matching these valid formats.
 */
export const isValidPhone = (phone = '') => {
  const digits = String(phone).replace(/\D/g, '');
  if (digits.length === 10) {
    return /^[6-9]\d{9}$/.test(digits);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return /^[6-9]\d{9}$/.test(digits.slice(1));
  }
  if (digits.length === 12 && digits.startsWith('91')) {
    return /^[6-9]\d{9}$/.test(digits.slice(2));
  }
  return false;
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
 * Validates all 5 required fields consistently across all forms.
 * Returns an error string if invalid, or null if valid.
 */
export const validateEnquiryForm = ({
  fullName = '',
  phone = '',
  location = '',
  service = '',
  message = ''
}) => {
  const cleanName = sanitizeSingleLine(fullName);
  const cleanPhone = sanitizeSingleLine(phone);
  const cleanLocation = sanitizeSingleLine(location);
  const cleanService = sanitizeSingleLine(service);
  const cleanMessage = String(message || '').trim();

  if (!cleanName) {
    return 'Please enter your Full Name.';
  }
  if (!cleanPhone) {
    return 'Please enter your Phone Number.';
  }
  if (!isValidPhone(cleanPhone)) {
    return 'Please enter a valid 10-digit mobile number (e.g. 94869 39201).';
  }
  if (!cleanLocation) {
    return 'Please enter your Area / Location (e.g. Palayamkottai, Tirunelveli).';
  }
  if (!cleanService) {
    return 'Please select the Service Required.';
  }
  if (!cleanMessage) {
    return 'Please provide a Brief Description of Work.';
  }
  return null;
};

/**
 * Sends an enquiry email to starrabik76@gmail.com via EmailJS.
 *
 * @param {Object} data
 * @param {string} data.fullName - Customer's full name (required)
 * @param {string} data.phone - Customer's phone number (required)
 * @param {string} data.location - Customer's area/location (required)
 * @param {string} data.service - Required electrical service (required)
 * @param {string} data.message - Brief description of work (required)
 * @param {string} [data.formType] - Form identifier ('Get a Service' or 'Send Enquiry')
 * @param {string} [data.honeypot] - Anti-spam trap field (must be empty)
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
export const sendEnquiryEmail = async ({
  fullName = '',
  phone = '',
  location = '',
  service = '',
  message = '',
  formType = 'General Enquiry',
  honeypot = ''
}) => {
  // 1. Honeypot check - silently discard bot submissions
  if (honeypot && String(honeypot).trim().length > 0) {
    return { success: true };
  }

  // 2. Validate all 5 required fields
  const validationError = validateEnquiryForm({ fullName, phone, location, service, message });
  if (validationError) {
    return { success: false, error: validationError };
  }

  const cleanName = sanitizeSingleLine(fullName);
  const cleanPhone = sanitizeSingleLine(phone);
  const cleanLocation = sanitizeSingleLine(location);
  const cleanService = sanitizeSingleLine(service);
  const cleanMessage = String(message || '').trim();
  const effectiveFormType = formType || 'Website Enquiry';

  // 3. Resolve EmailJS credentials
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || DEFAULT_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || DEFAULT_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || DEFAULT_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return {
      success: false,
      error: 'Enquiry service is currently being configured. Please call us directly at +91 94869 39201.'
    };
  }

  // 4. Construct template parameters containing all 5 fields
  const submissionTime = getFormattedTimestamp();

  const templateParams = {
    // 5 primary required fields
    customer_name: cleanName,
    phone: cleanPhone,
    location: cleanLocation,
    service: cleanService,
    message: cleanMessage,

    // Form origin & time metadata
    form_type: effectiveFormType,
    submitted_at: submissionTime,

    // Template compatibility aliases
    area: cleanLocation,
    description: cleanMessage,
    customer_email: 'Not requested (Direct phone contact)',
    from_name: cleanName,
    phone_number: cleanPhone,
    service_required: cleanService,
    form_source: effectiveFormType,
    submission_time: submissionTime,
    to_email: RECIPIENT_EMAIL,
    recipient_email: RECIPIENT_EMAIL,
    primary_email: PRIMARY_RECIPIENT_EMAIL,
    secondary_email: SECONDARY_RECIPIENT_EMAIL,
    cc_email: SECONDARY_RECIPIENT_EMAIL,
    bcc_email: SECONDARY_RECIPIENT_EMAIL,
    reply_to: PRIMARY_RECIPIENT_EMAIL,
    subject: `New Service Enquiry — S.P.T. Electrical Services (${cleanService}) [${effectiveFormType}]`
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
      error: 'Network connection error. Please check your internet connection or call +91 94869 39201.'
    };
  }
};

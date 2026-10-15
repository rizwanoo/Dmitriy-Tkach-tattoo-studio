import { useState, ChangeEvent, FormEvent } from 'react';
import { UploadCloud, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Phone, Mail, User } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  placement: string;
  concept: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  concept?: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    placement: 'Forearm',
    concept: '',
  });

  const [files, setFiles] = useState<{ name: string; preview: string }[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const quickPlacements = [
    'Forearm',
    'Full Sleeve',
    'Back',
    'Shoulder / Chest',
    'Leg / Calf',
    'Other Area',
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        name: file.name,
        preview: URL.createObjectURL(file),
      }));
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    }
    if (!formData.concept.trim()) {
      newErrors.concept = 'Please briefly describe your tattoo idea.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newId = `BK-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingId(newId);
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        const bookings = JSON.parse(localStorage.getItem('monster_ink_bookings') || '[]');
        bookings.push({
          id: newId,
          ...formData,
          filesCount: files.length,
          date: new Date().toISOString(),
        });
        localStorage.setItem('monster_ink_bookings', JSON.stringify(bookings));
      } catch (err) {
        console.error('Save error', err);
      }
    }, 900);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#111112] border border-white/10 p-8 sm:p-12 text-center max-w-xl mx-auto my-6 shadow-2xl">
        <div className="w-14 h-14 rounded-full bg-[#76262B]/20 border border-[#76262B] flex items-center justify-center mx-auto mb-5 text-[#E9E4DC]">
          <CheckCircle2 size={28} />
        </div>

        <span className="text-[10px] font-mono tracking-widest text-[#76262B] uppercase font-bold block mb-1">
          BOOKING REQUEST RECEIVED · {bookingId}
        </span>

        <h3 className="font-display text-4xl text-white tracking-wide uppercase mb-3">
          REQUEST SENT, {formData.fullName.toUpperCase()}
        </h3>

        <p className="text-xs sm:text-sm text-[#999995] font-sans font-light leading-relaxed mb-6">
          Dmitriy will reach out to you directly at <span className="text-white font-medium">{formData.email}</span> or <span className="text-white font-medium">{formData.phone}</span> to discuss design details, schedule your session, and confirm your deposit.
        </p>

        <div className="p-4 bg-[#090909] border border-white/5 text-xs text-left mb-6 space-y-1.5 font-sans">
          <p className="text-[#999995]">Placement: <span className="text-white font-medium">{formData.placement}</span></p>
          <p className="text-[#999995]">Idea: <span className="text-white font-medium">{formData.concept}</span></p>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              placement: 'Forearm',
              concept: '',
            });
            setFiles([]);
          }}
          className="px-6 py-3 text-xs font-semibold tracking-wider uppercase border border-white/20 text-[#E9E4DC] hover:border-white transition-colors"
        >
          SUBMIT ANOTHER REQUEST
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#111112] border border-white/10 p-6 sm:p-10 shadow-2xl max-w-2xl mx-auto">
      <div className="border-b border-white/10 pb-5 mb-6 text-left">
        <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wider uppercase mb-1">
          BOOK YOUR SESSION
        </h3>
        <p className="text-xs text-[#999995] font-sans">
          Simple, direct booking request. Fill in your contact info and idea below.
        </p>
      </div>

      {/* Name Field */}
      <div className="mb-5 text-left">
        <label className="block text-xs font-mono tracking-wider text-[#E9E4DC] uppercase mb-1.5">
          YOUR NAME <span className="text-[#76262B]">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#999995]">
            <User size={15} />
          </div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className={`w-full bg-[#090909] border pl-10 pr-4 py-3 text-sm text-[#E9E4DC] placeholder-[#999995]/40 focus:outline-none transition-colors ${
              errors.fullName ? 'border-red-500' : 'border-white/15 focus:border-[#E9E4DC]'
            }`}
          />
        </div>
        {errors.fullName && (
          <p className="text-red-400 text-xs mt-1 flex items-center gap-1 font-sans">
            <AlertCircle size={12} /> {errors.fullName}
          </p>
        )}
      </div>

      {/* Email & Phone Grid (Simple & Direct) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 text-left">
        {/* Email */}
        <div>
          <label className="block text-xs font-mono tracking-wider text-[#E9E4DC] uppercase mb-1.5">
            EMAIL ADDRESS <span className="text-[#76262B]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#999995]">
              <Mail size={15} />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@email.com"
              className={`w-full bg-[#090909] border pl-10 pr-4 py-3 text-sm text-[#E9E4DC] placeholder-[#999995]/40 focus:outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-white/15 focus:border-[#E9E4DC]'
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1 font-sans">
              <AlertCircle size={12} /> {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-mono tracking-wider text-[#E9E4DC] uppercase mb-1.5">
            PHONE NUMBER <span className="text-[#76262B]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#999995]">
              <Phone size={15} />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(201) 555-0192"
              className={`w-full bg-[#090909] border pl-10 pr-4 py-3 text-sm text-[#E9E4DC] placeholder-[#999995]/40 focus:outline-none transition-colors ${
                errors.phone ? 'border-red-500' : 'border-white/15 focus:border-[#E9E4DC]'
              }`}
            />
          </div>
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1 font-sans">
              <AlertCircle size={12} /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Body Placement Quick Picker */}
      <div className="mb-5 text-left">
        <label className="block text-xs font-mono tracking-wider text-[#E9E4DC] uppercase mb-2">
          BODY PLACEMENT
        </label>
        <div className="flex flex-wrap gap-2">
          {quickPlacements.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, placement: p }))}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors border ${
                formData.placement === p
                  ? 'bg-[#E9E4DC] text-[#090909] border-[#E9E4DC] font-semibold'
                  : 'bg-[#090909] text-[#999995] border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Tattoo Concept */}
      <div className="mb-5 text-left">
        <label className="block text-xs font-mono tracking-wider text-[#E9E4DC] uppercase mb-1.5">
          TATTOO IDEA / CONCEPT <span className="text-[#76262B]">*</span>
        </label>
        <textarea
          name="concept"
          rows={3}
          value={formData.concept}
          onChange={handleChange}
          placeholder="Briefly describe your idea, subject, or story..."
          className={`w-full bg-[#090909] border p-3.5 text-sm text-[#E9E4DC] placeholder-[#999995]/40 focus:outline-none transition-colors ${
            errors.concept ? 'border-red-500' : 'border-white/15 focus:border-[#E9E4DC]'
          }`}
        />
        {errors.concept && (
          <p className="text-red-400 text-xs mt-1 flex items-center gap-1 font-sans">
            <AlertCircle size={12} /> {errors.concept}
          </p>
        )}
      </div>

      {/* Optional Photo Attachment */}
      <div className="mb-6 text-left">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-mono tracking-wider text-[#999995] uppercase">
            REFERENCE PHOTO (OPTIONAL)
          </label>
          <label className="text-xs text-[#E9E4DC] hover:text-[#76262B] transition-colors cursor-pointer flex items-center gap-1 font-semibold">
            <UploadCloud size={14} /> + ATTACH IMAGE
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>

        {files.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {files.map((file, idx) => (
              <div key={file.name} className="relative group bg-[#090909] border border-white/15 p-1.5 flex items-center gap-2">
                <img src={file.preview} alt={file.name} className="w-10 h-10 object-cover" />
                <span className="text-xs text-[#E9E4DC] max-w-[120px] truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="text-red-400 hover:text-red-300 text-xs px-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mandatory Deposit Notice */}
      <div className="bg-[#090909] border-l-2 border-[#76262B] p-4 mb-6 text-left flex items-start gap-2.5">
        <ShieldCheck size={18} className="text-[#76262B] shrink-0 mt-0.5" />
        <p className="text-xs text-[#999995] font-sans leading-relaxed">
          <strong className="text-white">Deposit Notice:</strong> A deposit is required to secure a booking. The deposit amount and payment instructions will be confirmed directly by the artist.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 text-xs font-bold tracking-[0.18em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-[0.99]"
      >
        {isSubmitting ? (
          <span>SENDING REQUEST...</span>
        ) : (
          <>
            <span>BOOK YOUR SESSION</span>
            <ArrowRight size={15} />
          </>
        )}
      </button>

      <p className="mt-3.5 text-center text-[11px] text-[#999995]">
        Serving New Jersey &amp; New York · Private Studio Appointments
      </p>
    </form>
  );
}

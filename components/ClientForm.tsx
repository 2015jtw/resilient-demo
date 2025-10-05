"use client";

// React/NextJS
import { useState } from "react";

// UI
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";  
import { Input } from "./ui/input";
import { Alert, AlertDescription } from "./ui/alert";
import { CheckCircle2, AlertCircle, Mail, Phone, User } from "lucide-react";

// Zod + React Hook Form + Nodemailer
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/actions/sendEmail";

// form schema
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  phone: z
    .string()
    .optional()
    .refine(
      (value) =>
        !value ||
        /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/.test(value),
      {
        message: "Invalid phone number format",
      }
    ),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

const ClientForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await sendEmail(values);
      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Your message has been sent successfully! We'll get back to you soon.",
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again or contact us directly.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? `An error occurred: ${error.message}`
            : "An unknown error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 relative px-4 py-20" id="contact-form">
      <div className="absolute pointer-events-none inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
      
      <div className="container mx-auto max-w-4xl relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Ready to strengthen your organization&apos;s resilience?
          </p>
          <p className="text-sm text-gray-500 italic flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            All communications are encrypted for your privacy and security
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  name="firstName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        First Name *
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            {...field}
                            placeholder="John"
                            type="text"
                            className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="lastName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        Last Name *
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            {...field}
                            placeholder="Doe"
                            type="text"
                            className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            {...field}
                            placeholder="john.doe@example.com"
                            type="email"
                            className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        Phone Number (Optional)
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            {...field}
                            placeholder="(703) 555-1234"
                            type="tel"
                            className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Message Field */}
              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-gray-700">
                      Message *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        {...field}
                        placeholder="Tell us about your needs and how we can help..."
                        className="resize-none border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full h-12 text-base font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus.type && (
                <Alert
                  variant={submitStatus.type === "success" ? "default" : "destructive"}
                  className="mt-4"
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  <AlertDescription>{submitStatus.message}</AlertDescription>
                </Alert>
              )}
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ClientForm;
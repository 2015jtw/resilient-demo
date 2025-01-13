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

// Zod + React Hook Form + Nodemailer
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/actions/sendEmail";

// form schema
const formSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
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
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

const ClientForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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
    try {
      const result = await sendEmail(values);
      if (result.success) {
        setSubmitMessage("Your message has been sent successfully!");
        form.reset();
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      if (error instanceof Error) {
        setSubmitMessage("An error occurred: " + error.message);
      } else {
        setSubmitMessage("An unknown error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <div
        className="bg-white bg-dot-black/[0.2] relative px-4 py-12 pb-16 mt-1 "
        id="contact-form"
      >
        <div className="absolute pointer-events-none inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
        <h2 className="text-4xl text-center py-4">Contact Us</h2>

        <p className="text-center text-lg pb-6 italic">
          Contact Communications are encrypted for your privacy and security
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white max-w-2xl mx-auto w-full flex flex-col gap-4 container"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              name="firstName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="lastName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Doe" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="(703) - 555 - 1234"
                      type="tel"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    {...field}
                    placeholder="Your message here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
          {submitMessage && (
            <p
              className={`text-center ${submitMessage.includes("successfully") ? "text-green-600" : "text-red-600"}`}
            >
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </Form>
  );
};

export default ClientForm;

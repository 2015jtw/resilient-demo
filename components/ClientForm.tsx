"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { useState } from "react";

// form schema
const formSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

const ClientForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsSubmitted(true);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  return (
    <Form {...form}>
      <div
        className="bg-background container mx-auto px-4 pb-8"
        id="contact-form"
      >
        {!isSubmitted ? (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto w-full flex flex-col gap-4 my-12"
          >
            <h2 className="text-4xl text-center">Contact Us</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                name="firstName"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem className="flex-1">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
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

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                      placeholder="Put your Message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 my-12">
            <h2 className="text-4xl text-center">Contact Us</h2>

            <h3 className="text-2xl pb-4">Your message has been received!</h3>

            <Button
              onClick={() => {
                setIsSubmitted(false);
                form.reset();
              }}
            >
              Submit Another Message
            </Button>
          </div>
        )}
      </div>
    </Form>
  );
};

export default ClientForm;

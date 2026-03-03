import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more about your needs"),
});

export const ContactDialog = ({ open, onOpenChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, data);
      toast.success("Request sent! We'll reach out to schedule your walkthrough.");
      reset();
      onOpenChange(false);
    } catch (error) {
      console.error("Contact submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="contact-dialog">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold font-['Manrope']">
            Book a Walkthrough
          </DialogTitle>
          <DialogDescription>
            See Opteroo in action. We'll schedule a personalized demo based on your needs.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Name *</Label>
              <Input
                id="contact-name"
                placeholder="Your name"
                {...register("name")}
                data-testid="contact-name-input"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">Email *</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="you@company.com"
                {...register("email")}
                data-testid="contact-email-input"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-company">Company</Label>
            <Input
              id="contact-company"
              placeholder="Company name (optional)"
              {...register("company")}
              data-testid="contact-company-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">What would you like to see? *</Label>
            <Textarea
              id="contact-message"
              placeholder="Tell us about your current RMN setup and what challenges you're facing..."
              rows={4}
              {...register("message")}
              data-testid="contact-message-input"
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-full"
            data-testid="contact-submit-btn"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Request Walkthrough"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

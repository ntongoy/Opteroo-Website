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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const leadSchema = z.object({
  first_name: z.string().min(2, "First name is required"),
  last_name: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company is required"),
  company_abn: z.string().optional(),
  role: z.string().optional(),
  purpose: z.string().min(1, "Please select a purpose"),
});

export const LeadCaptureDialog = ({ open, onOpenChange, leadType }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      company: "",
      company_abn: "",
      role: "",
      purpose: "",
    },
  });

  const getTitle = () => {
    switch (leadType) {
      case "charter_access":
        return "Apply for Charter Access";
      case "waitlist":
        return "Join the Waitlist";
      default:
        return "Get Early Access";
    }
  };

  const getDescription = () => {
    switch (leadType) {
      case "charter_access":
        return "Be one of 20 Charter partners with direct product influence.";
      case "waitlist":
        return "We'll notify you when spots open up.";
      default:
        return "Start managing retail media the smarter way.";
    }
  };

  const EOI_API_URL = `${BACKEND_URL}/api/v1/eoi`;

  const buildPayload = (data) => ({
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    company: data.company || null,
    company_abn: data.company_abn || null,
    role: data.role || null,
    purpose: data.purpose || null,
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post(EOI_API_URL, buildPayload(data), {
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      toast.success(
        "Your expression of interest has been submitted successfully. We will be in touch shortly."
      );
      reset();
      onOpenChange(false);
    } catch (error) {
      console.error("EOI submission error:", error);
      const res = error.response?.data;
      const msg =
        res?.message ||
        (res?.errors && typeof res.errors === "object"
          ? Object.values(res.errors).flat().join(" ")
          : null) ||
        "Something went wrong. Please try again.";
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="lead-capture-dialog">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold font-['Manrope']">
            {getTitle()}
          </DialogTitle>
          <DialogDescription>{getDescription()}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first_name">First Name *</Label>
              <Input
                id="first_name"
                placeholder="First name"
                {...register("first_name")}
                data-testid="lead-first-name-input"
              />
              {errors.first_name && (
                <p className="text-xs text-red-500">{errors.first_name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="last_name">Last Name *</Label>
              <Input
                id="last_name"
                placeholder="Last name"
                {...register("last_name")}
                data-testid="lead-last-name-input"
              />
              {errors.last_name && (
                <p className="text-xs text-red-500">{errors.last_name.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                {...register("email")}
                data-testid="lead-email-input"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                placeholder="Company name"
                {...register("company")}
                data-testid="lead-company-input"
              />
              {errors.company && (
                <p className="text-xs text-red-500">{errors.company.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company_abn">Company ABN</Label>
              <Input
                id="company_abn"
                placeholder="Company ABN"
                {...register("company_abn")}
                data-testid="lead-company-abn-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                placeholder="Your role"
                {...register("role")}
                data-testid="lead-role-input"
              />
            </div>

          </div>

          <div className="space-y-2">
            <Label>Purpose *</Label>
            <Select
              onValueChange={(value) =>
                setValue("purpose", value, { shouldValidate: true })
              }
            >
              <SelectTrigger data-testid="lead-purpose-select">
                <SelectValue placeholder="Select purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pilot">Pilot</SelectItem>
                <SelectItem value="evaluate">Evaluate</SelectItem>
                <SelectItem value="full_use">Full Use</SelectItem>
              </SelectContent>
            </Select>
            {errors.purpose && (
              <p className="text-xs text-red-500">{errors.purpose.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-full"
            data-testid="lead-submit-btn"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

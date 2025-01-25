import {
  Button as ShadcnButton,
  ButtonProps as ShadcnButtonProps,
} from "@/components/ui/button";

interface CustomButtonProps extends ShadcnButtonProps {
  label: string;
}

export default function CustomButton({ label, ...props }: CustomButtonProps) {
  return <ShadcnButton {...props}>{label}</ShadcnButton>;
}

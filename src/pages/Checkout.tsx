import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CreditCard,
  Lock,
  CheckCircle2,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const orderSummary = {
  items: [
    { name: "Professional Plan", description: "Monthly subscription", price: 49.00 },
    { name: "Add-on: Priority Support", description: "24/7 dedicated support", price: 19.00 },
  ],
  subtotal: 68.00,
  tax: 6.80,
  total: 74.80,
};

const cardIcons = {
  visa: (
    <svg viewBox="0 0 48 48" className="w-8 h-5">
      <rect fill="#1565C0" width="48" height="48" rx="4" />
      <path fill="#fff" d="M19.1 31.3l2.7-16.6h4.4l-2.7 16.6h-4.4zM38 14.7l-4.2.9-.1.4-3.3 11.1-.2-.9-1.5-7.4-.7-3.2-.1-.4h-6.2l-.1.4-4.3 16.2h4.4l1.7-7.7.7 2.1 2.2 5.6h4.7l6.4-16.7.6.4zM13.5 31.3l.3-1.5.7-4.7.1-.4.6-4 .3-1.6h-5l-.1.4-4.5 11.4-.3.8h7.9z" />
    </svg>
  ),
  mastercard: (
    <svg viewBox="0 0 48 48" className="w-8 h-5">
      <rect fill="#FF5F00" width="48" height="48" rx="4" />
      <circle fill="#EB001B" cx="19" cy="24" r="12" />
      <circle fill="#F79E1B" cx="29" cy="24" r="12" />
    </svg>
  ),
  amex: (
    <svg viewBox="0 0 48 48" className="w-8 h-5">
      <rect fill="#1976D2" width="48" height="48" rx="4" />
      <path fill="#fff" d="M12 24l3-8h5l-3 8 3 8h-5l-3-8zm11-8h5l-2 4 2 4h-5l-2-4 2-4zm9 0l3 8-3 8h5l3-8-3-8h-5z" />
    </svg>
  ),
};

export default function Checkout() {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { toast } = useToast();

  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : value;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "number") {
      formattedValue = formatCardNumber(value);
    } else if (name === "expiry") {
      formattedValue = formatExpiry(value);
    } else if (name === "cvc") {
      formattedValue = value.replace(/[^0-9]/g, "").substring(0, 4);
    }

    setCardData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setPaymentSuccess(true);
    toast({
      title: "Payment successful!",
      description: "Your payment has been processed successfully.",
    });

    setIsLoading(false);
  };

  if (paymentSuccess) {
    return (
      <Layout showFooter={false}>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center animate-scale-in">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Payment Successful!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your purchase. A confirmation email has been sent to
              your inbox with the order details.
            </p>
            <div className="card-elevated p-6 mb-8 text-left">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-border">
                <span className="text-muted-foreground">Order ID</span>
                <span className="font-mono text-sm font-medium">
                  #PF-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Amount Paid</span>
                <span className="font-semibold text-foreground">
                  ${orderSummary.total.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Payment Method</span>
                <span className="font-medium text-foreground flex items-center gap-2">
                  {cardIcons.visa}
                  •••• {cardData.number.slice(-4)}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" className="flex-1" asChild>
                <Link to="/">Go to Dashboard</Link>
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <Link to="/">Download Receipt</Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Payment Form */}
            <div className="animate-fade-in">
              <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                Complete Your Purchase
              </h1>
              <p className="text-muted-foreground mb-8">
                Enter your payment details to complete the order
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Card Number */}
                <div className="space-y-2">
                  <Label htmlFor="number">Card Number</Label>
                  <div className="relative">
                    <Input
                      id="number"
                      name="number"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardData.number}
                      onChange={handleChange}
                      maxLength={19}
                      className="pl-12 pr-24"
                      required
                    />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                      {cardIcons.visa}
                      {cardIcons.mastercard}
                      {cardIcons.amex}
                    </div>
                  </div>
                </div>

                {/* Card Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Cardholder Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={cardData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Expiry & CVC */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      name="expiry"
                      type="text"
                      placeholder="MM/YY"
                      value={cardData.expiry}
                      onChange={handleChange}
                      maxLength={5}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <div className="relative">
                      <Input
                        id="cvc"
                        name="cvc"
                        type="text"
                        placeholder="123"
                        value={cardData.cvc}
                        onChange={handleChange}
                        maxLength={4}
                        className="pr-10"
                        required
                      />
                      <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Your payment is secured with 256-bit SSL encryption. We never
                    store your card details.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing Payment...
                    </span>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Pay ${orderSummary.total.toFixed(2)}
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:pl-8 animate-slide-in-right">
              <div className="card-elevated p-8 sticky top-24">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  {orderSummary.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-medium text-foreground">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">
                      ${orderSummary.subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (10%)</span>
                    <span className="text-foreground">
                      ${orderSummary.tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-display text-2xl font-bold text-foreground">
                      ${orderSummary.total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
                        <Lock className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Secure
                        <br />
                        Checkout
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        PCI DSS
                        <br />
                        Compliant
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Money-back
                        <br />
                        Guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

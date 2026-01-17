"use client";

import { Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12 text-center text-xs text-muted-foreground">
      {/* Closing mark */}
      <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full border text-primary">
        <Building2 className="h-4 w-4" />
      </div>

      <p className="mb-1">
        Thank you for visiting RK Associates
      </p>

      <p>
        © {new Date().getFullYear()} RK Associates. All rights reserved.
      </p>
    </footer>
  );
}

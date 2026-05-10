import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";

const cols = [
  {
    title: "المنصة",
    links: [
      { label: "المميزات", href: "#features" },
      { label: "الباقات", href: "#pricing" },
      { label: "كيف تعمل", href: "#how" },
      { label: "التكاملات", href: "#" },
      { label: "الأمان", href: "#" }
    ]
  },
  {
    title: "الشركة",
    links: [
      { label: "عن إدهام", href: "#" },
      { label: "وظائف", href: "#" },
      { label: "الشركاء", href: "#" },
      { label: "اتصل بنا", href: "#contact" }
    ]
  },
  {
    title: "الموارد",
    links: [
      { label: "مركز المساعدة", href: "#" },
      { label: "دليل ZATCA", href: "#" },
      { label: "المدونة", href: "#" },
      { label: "حالات دراسية", href: "#" },
      { label: "حالة المنصة", href: "#" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-ivory-100">
      <div className="container-prose pt-20 pb-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:gap-16">
          {/* Brand col */}
          <div className="col-span-2 sm:col-span-1">
            <Logo variant="dark" />
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold text-navy">{c.title}</h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-muted transition-colors hover:text-navy"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact band */}
        <div className="mt-14 grid grid-cols-1 gap-4 rounded-2xl bg-sand-50 p-6 sm:grid-cols-3">
          <div className="flex items-center gap-3 text-sm text-navy">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ivory-50 ring-1 ring-ink/5">
              <Mail className="h-4 w-4 text-teal-600" />
            </span>
            <a
              href="mailto:hello@idham.sa"
              className="font-medium hover:underline"
            >
              hello@idham.sa
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-navy">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ivory-50 ring-1 ring-ink/5">
              <Phone className="h-4 w-4 text-teal-600" />
            </span>
            <a href="tel:+966800000000" className="font-medium hover:underline" dir="ltr">
              ٩٢٠ ٠٠٠ ٠٠٠
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-navy">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ivory-50 ring-1 ring-ink/5">
              <MapPin className="h-4 w-4 text-teal-600" />
            </span>
            <span className="font-medium">الرياض، المملكة العربية السعودية</span>
          </div>
        </div>

        <div className="mt-10 hairline" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-ink-muted">
            © ٢٠٢٦ إدهام. جميع الحقوق محفوظة. سجل تجاري ١٠١٠XXXXXX
          </p>
          <div className="flex items-center gap-6 text-xs text-ink-muted">
            <a href="#" className="hover:text-navy transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-navy transition-colors">
              الشروط والأحكام
            </a>
            <a href="#" className="hover:text-navy transition-colors">
              ملفات تعريف الارتباط
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

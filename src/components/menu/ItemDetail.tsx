import { AnimatePresence, motion } from "framer-motion";
import { X, Phone } from "lucide-react";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  categoryById,
  formatPrice,
  restaurant,
  type MenuItem,
} from "@/data/menu";

type Props = {
  item: MenuItem | null;
  onClose: () => void;
};

export function ItemDetail({ item, onClose }: Props) {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [item, onClose]);

  const category = item ? categoryById[item.category] : undefined;

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-background/70 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="item-detail-title"
            initial={
              isMobile ? { y: "100%" } : { opacity: 0, scale: 0.94, y: 16 }
            }
            animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
            exit={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-[2rem] shadow-[var(--shadow-lift)] sm:max-h-[86vh] sm:max-w-4xl sm:rounded-[2rem]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close item details"
              className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur-md transition-transform hover:scale-105 active:scale-95"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className={item.image ? "sm:grid sm:grid-cols-2" : ""}>
              {item.image ? (
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto sm:h-full sm:min-h-[26rem]">
                  <img
                    src={item.image}
                    alt={`${item.name} — ${category?.name ?? "menu item"}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "var(--gradient-ember)" }}
                  />
                  <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-foreground/30 sm:hidden" />
                </div>
              ) : (
                <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-foreground/30 sm:hidden" />
              )}

              <div className="p-6 sm:p-8">

                <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
                  {category?.name}
                </p>
                <h2
                  id="item-detail-title"
                  className="mt-2 font-display text-[2rem] font-semibold leading-[1.1] text-foreground sm:text-4xl"
                >
                  {item.name}
                </h2>

                {item.badges?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs uppercase tracking-[0.14em] text-gold"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                ) : null}

                <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground sm:text-lg">
                  {item.description ??
                    `${item.name} from our ${category?.name} selection.`}
                </p>

                <div className="hairline-gold my-6 h-px w-full" />

                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-2xl font-semibold text-gold sm:text-[26px]">
                    {formatPrice(item.price)}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Item {String(item.no).padStart(3, "0")}
                  </span>
                </div>

                {category?.note ? (
                  <p className="mt-4 rounded-2xl border border-border bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground">
                    {category.note}
                  </p>
                ) : null}

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {restaurant.notes.join(" ")}
                </p>

                <a
                  href={`tel:${restaurant.homeDelivery.replace(/-/g, "")}`}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Order — {restaurant.homeDelivery}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

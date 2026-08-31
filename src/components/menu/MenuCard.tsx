import { motion } from "framer-motion";
import { formatPrice, type MenuItem, categoryById } from "@/data/menu";

type Props = {
  item: MenuItem;
  index: number;
  onSelect: (item: MenuItem) => void;
};

export function MenuCard({ item, index, onSelect }: Props) {
  const category = categoryById[item.category];

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(item)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index, 6) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileTap={{ scale: 0.985 }}
      aria-label={`${item.name}, ${formatPrice(item.price)}. View details`}
      className="card-lift group relative flex w-full flex-col overflow-hidden rounded-3xl border border-border bg-card text-left shadow-[var(--shadow-soft)]"
    >
      {item.image ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={`${item.name} — ${category?.name ?? "menu item"}`}
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 30%, color-mix(in oklab, var(--background) 88%, transparent))",
            }}
          />
          {item.badges?.length ? (
            <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
              {item.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-gold backdrop-blur-md"
                >
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
          <span className="absolute right-3 top-3 rounded-full bg-background/55 px-2 py-1 text-[10px] font-medium tracking-widest text-muted-foreground backdrop-blur-md">
            {String(item.no).padStart(2, "0")}
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 pt-4 sm:px-5">
          <span className="text-[11px] uppercase tracking-[0.24em] text-gold">
            {category?.name}
          </span>
          <span className="pb-3 text-[10px] font-medium tracking-widest text-muted-foreground">
            {String(item.no).padStart(2, "0")}
          </span>
        </div>
      )}


      <div className="flex flex-1 flex-col gap-1.5 p-4 sm:p-5">
        <h3 className="font-display text-xl leading-tight text-foreground sm:text-2xl">
          {item.name}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {item.description ?? category?.name}
        </p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-base font-semibold text-gold sm:text-lg">
            {formatPrice(item.price)}
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-gold">
            View
          </span>
        </div>
      </div>
    </motion.button>
  );
}

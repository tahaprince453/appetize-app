import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, Phone, UtensilsCrossed, LayoutGrid, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-tandoor.jpg";
import { MenuCard } from "@/components/menu/MenuCard";
import { ItemDetail } from "@/components/menu/ItemDetail";
import {
  categories,
  formatPrice,
  menuItems,
  restaurant,
  type MenuItem,
} from "@/data/menu";

const TITLE = "Tandoori Restaurant G-8 Islamabad — Our Menu";
const DESCRIPTION =
  "Browse the full Tandoori Restaurant G-8 Islamabad menu: BBQ platters, Pakistani handi & karahi, Chinese, sea food, tandoor breads, beverages and desserts with live prices.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "restaurant.menu" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) return null;
    return menuItems.filter((item) => {
      const category = categories.find((c) => c.id === item.category);
      return (
        item.name.toLowerCase().includes(normalizedQuery) ||
        (item.description ?? "").toLowerCase().includes(normalizedQuery) ||
        (category?.name ?? "").toLowerCase().includes(normalizedQuery)
      );
    });
  }, [normalizedQuery]);

  const visibleCategories = useMemo(
    () =>
      activeCategory === "all"
        ? categories
        : categories.filter((c) => c.id === activeCategory),
    [activeCategory],
  );

  const scrollToCategory = useCallback((id: string) => {
    setActiveCategory("all");
    setQuery("");
    requestAnimationFrame(() => {
      document
        .getElementById(`section-${id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  return (
    <div className="min-h-screen bg-background pb-28 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-panel border-x-0 border-t-0 shadow-[var(--shadow-soft)]">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <div
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-primary-foreground"
            style={{ background: "var(--gradient-gold)" }}
            aria-hidden="true"
          >
            <UtensilsCrossed className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-lg leading-tight text-foreground sm:text-xl">
              {restaurant.name}
            </p>
            <p className="truncate text-[10px] uppercase tracking-[0.24em] text-gold">
              {restaurant.branch} · Menu
            </p>
          </div>
          <a
            href={`tel:${restaurant.homeDelivery.replace(/-/g, "")}`}
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.16em] text-foreground transition-colors hover:border-gold hover:text-gold sm:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {restaurant.homeDelivery}
          </a>
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label={searchOpen ? "Close search" : "Search the menu"}
            aria-expanded={searchOpen}
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            {searchOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Search className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {searchOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-border"
            >
              <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
                <label htmlFor="menu-search" className="sr-only">
                  Search dishes, descriptions and categories
                </label>
                <input
                  id="menu-search"
                  ref={searchInputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  placeholder="Search dishes, categories…"
                  className="w-full rounded-full border border-border bg-secondary/70 px-5 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Category chips */}
        {!results ? (
          <div
            ref={chipsRef}
            className="no-scrollbar flex gap-2 overflow-x-auto border-t border-border px-4 py-3 sm:px-6"
          >
            <CategoryChip
              label="All"
              active={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
            />
            {categories.map((c) => (
              <CategoryChip
                key={c.id}
                label={c.name}
                active={activeCategory === c.id}
                onClick={() =>
                  activeCategory === "all"
                    ? scrollToCategory(c.id)
                    : setActiveCategory(c.id)
                }
                onDoubleClick={() => setActiveCategory(c.id)}
              />
            ))}
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Skewers grilling over glowing coals inside a clay tandoor beside whole spices"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--background) 55%, transparent), color-mix(in oklab, var(--background) 94%, transparent))",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:px-6 sm:py-28"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            {restaurant.since}
          </p>
          <h1 className="mt-4 font-display text-6xl font-semibold leading-[0.95] sm:text-8xl">
            <span className="text-gold-gradient">Our Menu</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
            {restaurant.tagline} — {restaurant.branch}, {restaurant.address}.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${restaurant.homeDelivery.replace(/-/g, "")}`}
              className="rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:scale-105 active:scale-95"
              style={{ background: "var(--gradient-gold)" }}
            >
              Home Delivery
            </a>
            <a
              href={`https://${restaurant.website}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-7 py-3.5 text-sm uppercase tracking-[0.16em] text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              {restaurant.website}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Menu */}
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {results ? (
          <section aria-live="polite">
            <h2 className="font-display text-3xl text-foreground">
              {results.length} result{results.length === 1 ? "" : "s"} for “{query.trim()}”
            </h2>
            {results.length ? (
              <div className="mt-7 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {results.map((item, i) => (
                  <MenuCard key={item.no + item.name} item={item} index={i} onSelect={setSelected} />
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-3xl border border-border bg-card p-12 text-center">
                <p className="font-display text-2xl text-foreground">Nothing on the menu matches that</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try “karahi”, “biryani”, “kabab” or browse a category instead.
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-6 rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.16em] transition-colors hover:border-gold hover:text-gold"
                >
                  Clear search
                </button>
              </div>
            )}
          </section>
        ) : (
          visibleCategories.map((category) => {
            const items = menuItems.filter((i) => i.category === category.id);
            return (
              <section
                key={category.id}
                id={`section-${category.id}`}
                className="scroll-mt-44 pb-14"
                aria-labelledby={`heading-${category.id}`}
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                      {items.length} items
                    </p>
                    <h2
                      id={`heading-${category.id}`}
                      className="mt-1 font-display text-3xl text-foreground sm:text-4xl"
                    >
                      {category.name}
                    </h2>
                  </div>
                </div>
                <div className="hairline-gold mt-4 h-px w-full" />
                {category.note ? (
                  <p className="mt-4 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {category.note}
                  </p>
                ) : null}
                <div className="mt-7 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((item, i) => (
                    <MenuCard key={item.no + item.name} item={item} index={i} onSelect={setSelected} />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
          <p className="font-display text-3xl text-gold-gradient">{restaurant.branch}</p>
          <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {restaurant.address}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Mob: {restaurant.mobile} · Tel: {restaurant.tel}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Home Delivery: {restaurant.homeDelivery}
          </p>
          <a
            href={`https://${restaurant.website}`}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block text-sm text-gold"
          >
            {restaurant.website}
          </a>
          <ul className="mt-6 space-y-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {restaurant.notes.map((note) => (
              <li key={note}>*{note}</li>
            ))}
          </ul>
        </div>
      </footer>

      {/* Mobile bottom navigation */}
      <nav
        aria-label="Menu navigation"
        className="glass-panel fixed inset-x-3 bottom-3 z-40 flex items-center justify-around rounded-full px-2 py-2 shadow-[var(--shadow-lift)] md:hidden"
      >
        <BottomAction
          icon={<UtensilsCrossed className="h-5 w-5" aria-hidden="true" />}
          label="Menu"
          onClick={() => {
            setQuery("");
            setActiveCategory("all");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <BottomAction
          icon={<Search className="h-5 w-5" aria-hidden="true" />}
          label="Search"
          onClick={() => {
            setSearchOpen(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <BottomAction
          icon={<LayoutGrid className="h-5 w-5" aria-hidden="true" />}
          label="Categories"
          onClick={() => {
            setQuery("");
            window.scrollTo({ top: 0, behavior: "smooth" });
            chipsRef.current?.scrollTo({ left: 0, behavior: "smooth" });
          }}
        />
        <a
          href={`tel:${restaurant.homeDelivery.replace(/-/g, "")}`}
          className="ml-1 grid h-12 w-12 place-items-center rounded-full text-primary-foreground"
          style={{ background: "var(--gradient-gold)" }}
          aria-label={`Call home delivery ${restaurant.homeDelivery}`}
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
        </a>
      </nav>

      {/* Desktop floating call button */}
      <a
        href={`tel:${restaurant.homeDelivery.replace(/-/g, "")}`}
        className="fixed bottom-8 right-8 z-40 hidden items-center gap-2 rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105 active:scale-95 md:flex"
        style={{ background: "var(--gradient-gold)" }}
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Order {restaurant.homeDelivery}
      </a>

      <ItemDetail item={selected} onClose={() => setSelected(null)} />
      <span className="sr-only">
        Prices from {formatPrice(menuItems[menuItems.length - 1].price)} listings are as printed on the
        restaurant menu.
      </span>
    </div>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
  onDoubleClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  onDoubleClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      aria-pressed={active}
      className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-xs uppercase tracking-[0.14em] transition-all duration-300 ${
        active
          ? "border-transparent text-primary-foreground"
          : "border-border text-muted-foreground hover:border-gold hover:text-gold"
      }`}
      style={active ? { background: "var(--gradient-gold)" } : undefined}
    >
      {label}
    </button>
  );
}

function BottomAction({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-w-16 flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-gold"
    >
      {icon}
      {label}
    </button>
  );
}

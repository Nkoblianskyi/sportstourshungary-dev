'use client'

export function ContactForm() {
  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <h2 className="font-display font-bold text-xl text-foreground mb-6">Üzenet küldése</h2>
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Neve <span className="text-destructive">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Kovács János"
              className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              E-mail <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="pelda@email.hu"
              className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-sm font-medium text-foreground">
            Tárgy
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Az üzenet tárgya"
            className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Üzenet <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            required
            placeholder="Írja ide üzenetét..."
            className="border border-input rounded-md px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
        </div>
        <button
          type="submit"
          className="self-start bg-primary text-primary-foreground font-semibold text-sm px-6 py-2.5 rounded-md hover:bg-primary/90 transition-colors"
        >
          Küldés
        </button>
      </form>
    </div>
  )
}

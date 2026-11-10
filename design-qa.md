**Findings**

- Resolved: browser-rendered comparison was previously blocked (local database down). With `pnpm db:start` running, the home and blog routes render and were captured at 1440px and 390px.
- Desktop floating nav renders as designed: 984px track, active pill, "Book a class" button. The blog layout now aligns its sidebar and post sheet to the same 984px track.
- Mobile: the menu button no longer overlaps blog post titles. No horizontal overflow on home or blog at 390px.

**Sources**

- Blog post: Paper file "Bala Yoga" (`Blog post — Desktop`, `Blog post — Mobile`).

**Follow-up Polish**

- Add the small diagonal booking arrow from the desktop nav source once a project-approved icon asset is available.

final result: pass

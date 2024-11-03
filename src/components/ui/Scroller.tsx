export const Scroller = () => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <div className="flex flex-col fixed right-10 bottom-10 divide-y-2 opacity-0 hover:opacity-100 transition-all">
      <button
        title="Scroll to top"
        className="px-4 py-2 text-2xl bg-slate-100 rounded-t-full text-slate-600 hover:text-black"
        onClick={scrollToTop}
        aria-label="scroll-to-top"
      >
        &uarr;
      </button>
      <button
        title="Scroll to bottom"
        className="px-4 py-2 text-2xl bg-slate-100 rounded-b-full text-slate-600 hover:text-black"
        onClick={scrollToBottom}
        aria-label="scroll-to-bottom"
      >
        &darr;
      </button>
    </div>
  );
};

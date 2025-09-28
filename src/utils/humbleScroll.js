// Credits to
        // Original file created from,
        // GitHub Repository: https://github.com/MathiasOxholm/humbleScroll
        // User: MathiasOxholm
        //

        // needs css file to be imported (done in public/css/cdHumbleScroll.css)

        // Main HumbleScroll Class
        class HumbleScroll {
            constructor(options, frameWindow, frameDocument) {
                this.frameWindow = frameWindow;
                this.frameDocument = frameDocument;
                this.prefix = "cdhs";
                this.documentHeight =
                    this.frameDocument.documentElement.scrollHeight -
                    this.frameDocument.documentElement.clientHeight;
                this.defaultOptions = {
                    root: null,
                    element: `[data-${this.prefix}]`,
                    enableCallback: false,
                    callback: `data-${this.prefix}-call`,
                    class: `${this.prefix}-inview`,
                    initClass: `${this.prefix}-init`,
                    threshold: 0.1,
                    offset: {
                        top: 0,
                        right: 0,
                        bottom: -40,
                        left: 0,
                    },
                    repeat: false,
                    mirror: false,
                    startEvent: "DOMContentLoaded",
                    responsive: {},
                };
                this.options = {
                    ...this.defaultOptions,
                    ...options
                };
                this.observerOptions = {
                    root: this.options.root,
                    rootMargin: this.calculateOffset(this.options.offset),
                    threshold: this.options.threshold,
                };
                this.animationElements = this.frameDocument.querySelectorAll(
                    this.options.element
                );
                this.callbackElements = this.frameDocument.querySelectorAll(
                    `[${this.options.callback}]`
                );
                this.init();
            }

            init() {
                const completeEvent = new Event(`${this.prefix}:complete`);
                let caller = null;

                const animationObserverFunction = (entries) => {
                    entries.forEach((entry) => {
                        const dataAttr = entry.target.dataset.hs;

                        if (!this.options.repeat && entry.isIntersecting) {
                            entry.target.classList.add(this.options.class);
                            observer.unobserve(entry.target);
                            return;
                        }

                        entry.target.classList.toggle(this.options.class, entry.isIntersecting);

                        if (entry.isIntersecting && dataAttr && dataAttr.includes("once")) {
                            entry.target.classList.add(this.options.class);
                            observer.unobserve(entry.target);
                        }
                    });
                };

                const callbackObserverFunction = (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const call = entry.target.getAttribute(this.options.callback);
                            this.frameWindow[call] && this.frameWindow[call]();
                            caller.unobserve(entry.target);
                        }
                    });
                };

                const observer = new IntersectionObserver(
                    animationObserverFunction,
                    this.observerOptions
                );
                this.options.enableCallback &&
                    (caller = new IntersectionObserver(
                        callbackObserverFunction,
                        this.observerOptions
                    ));

                const startEventCallback = () => {
                    this.animationElements.forEach((element) => {
                        observer.observe(element);
                        element.classList.add(this.options.initClass);
                    });

                    this.frameDocument.body.classList.add(`${this.prefix}-loaded`);
                    this.frameWindow.dispatchEvent(completeEvent);
                };

                const startCallbackFunction = () => {
                    this.callbackElements.forEach((element) => {
                        caller.observe(element);
                    });
                };
                //doing a small hack here (readystate)
                // Directly call startEventCallback if document is already loaded

                onDocumentReady(function() {
                    startEventCallback();
                    // Place your code here that needs to run once the DOM is ready
                }, this.frameDocument);
                // if (this.frameDocument.readyState === "complete") {
                //   console.log("runs here 1")

                // } else {
                //   console.log("runs here 2")

                //   this.frameWindow.addEventListener(
                //     this.options.startEvent,
                //     startEventCallback
                //   );
                // }
                // this.frameWindow.addEventListener(
                //   this.options.startEvent,
                //   startEventCallback
                // );
                this.options.enableCallback &&
                    this.frameWindow.addEventListener(
                        this.options.startEvent,
                        startCallbackFunction
                    );
                this.frameWindow.dispatchEvent(completeEvent);
            }

            update() {
                this.init();
            }

            on(event, callback) {
                this.frameWindow.addEventListener(
                    event,
                    (e) => {
                        callback(e);
                    },
                    false
                );
            }

            calculateOffset(data) {
                let obj = {
                    ...this.defaultOptions.offset,
                    ...data
                };
                let offset = `${obj.top}px ${obj.right}px ${obj.bottom}px ${obj.left}px`;
                let repeatOffset = `${this.documentHeight}px ${obj.right}px ${obj.bottom}px ${obj.left}px`;

                if (this.options.repeat) {
                    !this.options.mirror && (offset = repeatOffset);
                }

                return offset;
            }
        }


        // If you need to create an instance of HumbleScroll outside of this file,
        // you can import HumbleScroll from this file and then use the following code.
        // The actual instantiation would typically happen in the file where you are using the FrameContextConsumer.

        /*
        // Fire regular HumbleScroll with specific options
        const scroll = new HumbleScroll({
          enableCallback: true,
          repeat: true,
          mirror: true,
          threshold: 0.25,
          offset: {
            top: -64,
            bottom: -150,
          },
        }, frameWindow, frameDocument); // frameWindow and frameDocument should be the window and document of the iframe
        */

        function onDocumentReady(fn, document) {
            if (document.readyState !== "loading") {
                // If the document is already ready, call the function immediately
                fn();
            } else {
                // Otherwise, wait for the DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", fn);
            }
        }

// Export for use in React
export default HumbleScroll;
export { onDocumentReady };
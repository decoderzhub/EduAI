// script-0 - Converted from inline script


        (function() {
            console.log('Event listeners script initialized');

            // Global state for slider components
            const sliderStates = {};

            // Helper function to traverse until slider main element
            function traverseTillSliderMainElementCondition(element) {
                if (!element || element.nodeType !== Node.ELEMENT_NODE) return false;

                // Check if this element has the slider-component-v1 componentType
                const componentType = element.getAttribute("data-component-type");
                return componentType === "slider-component-v1";
            }

            // Show slide function
            function showSlide({
                currentIndex,
                slideElements = [],
                slidesWrapperWidth,
                identifier
            }) {
                console.log(identifier, "identifier known")
                if (identifier === "home-e-16") {
                    console.log("showSlide called --new", currentIndex, slideElements, slidesWrapperWidth, identifier)
                }
                if (typeof currentIndex === "undefined") return;
                if (!slidesWrapperWidth) return;

                slideElements.forEach((item) => {
                    if (item.style) {
                        item.style.transform = `translateX(-${currentIndex * slidesWrapperWidth}px)`;
                    }
                });
            }

            // Slider function definitions
            const fnDefs = {
                onMountSliderForAutoplay: (targetId) => {
                    console.log('onMountSliderForAutoplay called for:', targetId);
                    const doc = document;
                    let elem = doc.querySelector('.' + targetId);

                    while (elem && !traverseTillSliderMainElementCondition(elem)) {
                        elem = elem.parentNode;
                    }

                    if (!elem) {
                        console.error('No slider component found for onMountSliderForAutoplay');
                        return;
                    }

                    // Get the client ID from the element's class name (e.g., home-e-16)
                    const classes = elem.className.split(' ');
                    const elemClientId = classes.find(c => c.includes('-e-'));
                    if (!elemClientId) {
                        console.error('No client ID found in element classes:', classes);
                        return;
                    }

                    const sliderData = sliderStates[elemClientId]?.sliderData || {};
                    const componentStructureMap = sliderStates[elemClientId]?.componentStructureMap || {};

                    if (!componentStructureMap.slidesWrapper) return;

                    const slidesWrapperId = componentStructureMap.slidesWrapper;
                    const slidesWrapperElem = doc?.querySelector('.' + slidesWrapperId);
                    const slidesWrapperWidth = slidesWrapperElem?.getBoundingClientRect?.()?.width;
                    const slides = [...(slidesWrapperElem?.childNodes || [])].filter(node =>
                        node.nodeType === Node.ELEMENT_NODE &&
                        node.className &&
                        node.className.includes('cd-slider-v1--slide')
                    );
                    let slidesLength = slides.length;

                    const {
                        sliderAutoPlay = false,
                            sliderAutoplayStartDelay: START_DELAY = 2000,
                            slideDuration: SLIDE_DELAY = 2000,
                            sliderAutoplayStopAfter: STOP_AFTER = 60000,
                    } = sliderData;

                    if (!sliderAutoPlay) return;

                    // Function to update slide
                    const updateSlide = () => {
                        let currentIndex = sliderStates[elemClientId]?.currentIndex || 0;
                        let newIndex = ((currentIndex) + 1) % slidesLength;
                        // Update state
                        if (!sliderStates[elemClientId]) sliderStates[elemClientId] = {};
                        sliderStates[elemClientId].currentIndex = newIndex;

                        showSlide({
                            currentIndex: newIndex,
                            slideElements: slides,
                            slidesWrapperWidth,
                        });
                    };

                    // Initial delay before starting the slide updates
                    setTimeout(() => {
                        updateSlide(); // Update the slide once initially

                        // Store the interval ID to clear it later
                        const intervalId = setInterval(updateSlide, Math.abs(SLIDE_DELAY));

                        // Stop the slide updates after specified time
                        setTimeout(() => {
                            clearInterval(intervalId);
                        }, Math.abs(STOP_AFTER));
                    }, Math.abs(START_DELAY));
                },

                nextSlide: (e) => {
                    console.log('nextSlide called');
                    e?.preventDefault();

                    let elem = e.currentTarget;

                    while (elem && !traverseTillSliderMainElementCondition(elem)) {
                        elem = elem.parentNode;
                    }

                    if (!elem) {
                        console.error('No slider component found for nextSlide');
                        return;
                    }

                    // Get the client ID from the element's class name (e.g., home-e-16)
                    const classes = elem.className.split(' ');
                    const elemClientId = classes.find(c => c.includes('-e-'));
                    if (!elemClientId) {
                        console.error('No client ID found in element classes:', classes);
                        return;
                    }

                    const sliderStateData = sliderStates[elemClientId];
                    if (!sliderStateData) {
                        console.error('No slider state found for element:', elemClientId, elem);
                        return;
                    }

                    const sliderData = sliderStateData.sliderData || {};
                    const componentStructureMap = sliderStateData.componentStructureMap || {};

                    if (!componentStructureMap.slidesWrapper) {
                        console.error('No slidesWrapper found in componentStructureMap:', componentStructureMap);
                        return;
                    }

                    const slidesWrapperId = componentStructureMap.slidesWrapper;
                    const doc = document;
                    const slidesWrapperElem = doc?.querySelector('.' + slidesWrapperId);
                    const slidesWrapperWidth = slidesWrapperElem?.getBoundingClientRect?.()?.width;
                    const slides = [...(slidesWrapperElem?.childNodes || [])].filter(node =>
                        node.nodeType === Node.ELEMENT_NODE &&
                        node.className &&
                        node.className.includes('cd-slider-v1--slide')
                    );
                    let currentIndex = sliderStates[elemClientId]?.currentIndex || 0;
                    let slidesLength = slides.length;
                    let newIndex = ((currentIndex) + 1) % slidesLength;
                    // Update state
                    if (!sliderStates[elemClientId]) sliderStates[elemClientId] = {};
                    sliderStates[elemClientId].currentIndex = newIndex;

                    showSlide({
                        currentIndex: newIndex,
                        slideElements: slides,
                        slidesWrapperWidth,
                        identifier: elemClientId
                    });
                },

                prevSlide: (e) => {
                    console.log('prevSlide called');
                    e?.preventDefault();

                    let elem = e.currentTarget;

                    while (elem && !traverseTillSliderMainElementCondition(elem)) {
                        elem = elem.parentNode;
                    }

                    if (!elem) {
                        console.error('No slider component found for prevSlide');
                        return;
                    }

                    // Get the client ID from the element's class name (e.g., home-e-16)
                    const classes = elem.className.split(' ');
                    const elemClientId = classes.find(c => c.includes('-e-'));
                    if (!elemClientId) {
                        console.error('No client ID found in element classes:', classes);
                        return;
                    }

                    const sliderStateData = sliderStates[elemClientId];
                    if (!sliderStateData) {
                        console.error('No slider state found for element:', elemClientId);
                        return;
                    }

                    const sliderData = sliderStateData.sliderData || {};
                    const componentStructureMap = sliderStateData.componentStructureMap || {};

                    if (!componentStructureMap.slidesWrapper) {
                        console.error('No slidesWrapper found in componentStructureMap:', componentStructureMap);
                        return;
                    }

                    const slidesWrapperId = componentStructureMap.slidesWrapper;
                    const doc = document;
                    const slidesWrapperElem = doc?.querySelector('.' + slidesWrapperId);
                    const slidesWrapperWidth = slidesWrapperElem?.getBoundingClientRect?.()?.width;
                    const slides = [...(slidesWrapperElem?.childNodes || [])].filter(node =>
                        node.nodeType === Node.ELEMENT_NODE &&
                        node.className &&
                        node.className.includes('cd-slider-v1--slide')
                    );
                    let currentIndex = sliderStates[elemClientId]?.currentIndex || 0;
                    let slidesLength = slides.length;
                    let newIndex = ((currentIndex) - 1 + slidesLength) % slidesLength;

                    // Update state
                    if (!sliderStates[elemClientId]) sliderStates[elemClientId] = {};
                    sliderStates[elemClientId].currentIndex = newIndex;

                    showSlide({
                        currentIndex: newIndex,
                        slideElements: slides,
                        slidesWrapperWidth,
                    });
                }
            };

            // Helper function to parse CSS code
            function parseCSS(cssString) {
                if (!cssString) return {};
                const result = {};
                const declarations = cssString.split(';');

                for (let i = 0; i < declarations.length; i++) {
                    const declaration = declarations[i].trim();
                    if (!declaration) continue;

                    const colonPos = declaration.indexOf(':');
                    if (colonPos === -1) continue;

                    const property = declaration.substring(0, colonPos).trim();
                    const value = declaration.substring(colonPos + 1).trim();
                    result[property] = value;
                }

                return result;
            }

            // Helper function to generate CSS string
            function generateCSSString(cssObject) {
                if (!cssObject) return '';
                return Object.keys(cssObject)
                    .filter(key => cssObject[key] !== undefined && cssObject[key] !== null)
                    .map(key => `${key}: ${cssObject[key]}`)
                    .join('; ');
            }

            // Handle link click action
            const handleLinkClickAction = (e) => {
                console.log('Link click action triggered', e.currentTarget);

                const isClickedOnLink = e.target.closest("a");
                if (isClickedOnLink && e.currentTarget !== e.target) {
                    console.log('Click on link inside component, allowing default behavior');
                    return; // Allow the link click to proceed normally
                }

                const classes = e.currentTarget.className.split(' ');
                console.log('Element classes:', classes);

                const selectedId = classes.find(c => c.includes('-e-'));
                console.log('Selected ID from classes:', selectedId);
                if (!selectedId) {
                    console.log('No valid ID found in classes, aborting');
                    return;
                }

                const linkActionObject = e.currentTarget.getAttribute('data-link-action');
                console.log('Link action object (raw):', linkActionObject);
                if (!linkActionObject) {
                    console.log('No data-link-action attribute found, aborting');
                    return;
                }

                try {
                    const actionData = JSON.parse(linkActionObject);
                    console.log('Parsed action data:', actionData);

                    const whitelist = [
                        "margin-left", "margin-top", "margin-right", "margin-bottom",
                        "width", "height", "minWidth", "maxWidth", "minHeight", "maxHeight",
                        "display", "position"
                    ];

                    Object.values(actionData).forEach((actionObject) => {
                        console.log('Processing action:', actionObject);
                        const {
                            targetElementId,
                            cssCode,
                            toggleBehaviour = false
                        } = actionObject;
                        if (!targetElementId) {
                            console.log('No targetElementId found, skipping action');
                            return;
                        }

                        // Find target element by class name (mapped from ID)
                        const targetSelector = '.' + targetElementId;
                        console.log('Looking for target element with selector:', targetSelector);
                        const targetElement = document.querySelector(targetSelector);

                        if (targetElement) {
                            console.log('Target element found:', targetElement);
                            const styleNodeId = `style-${targetElementId}`;
                            let styleNode = document.querySelector(`#${styleNodeId}`);
                            console.log('Style node exists:', !!styleNode);

                            // Create data attribute to track toggle state
                            const toggleStateAttr = "data-toggle-state";
                            const isToggled = targetElement.getAttribute(toggleStateAttr) === "true";
                            console.log('Is element already toggled:', isToggled);

                            if (!styleNode) {
                                console.log('Creating new style node');
                                styleNode = document.createElement("style");
                                styleNode.id = styleNodeId;
                                targetElement.appendChild(styleNode);
                            }

                            const existingCSS = styleNode.textContent || "";
                            const existingCSSObject = parseCSS(existingCSS);
                            const newCSSObject = parseCSS(cssCode);
                            console.log('Existing CSS object:', existingCSSObject);
                            console.log('New CSS object:', newCSSObject);

                            if (toggleBehaviour && isToggled) {
                                console.log('Toggle behavior - reverting changes');
                                // Revert changes if toggled
                                whitelist.forEach((property) => {
                                    if (targetElement.style[property]) {
                                        targetElement.style[property] =
                                            targetElement.getAttribute(`data-original-${property}`) || "";
                                        targetElement.removeAttribute(`data-original-${property}`);
                                    }
                                });

                                // Remove added CSS properties while keeping original styles
                                const originalStyles = JSON.parse(
                                    targetElement.getAttribute("data-original-styles") || "{}"
                                );
                                styleNode.textContent = `${targetSelector} { ${generateCSSString(
                  originalStyles
                )} }`;

                                targetElement.setAttribute(toggleStateAttr, "false");
                            } else {
                                console.log('Applying new styles');
                                // Store original styles before applying new ones
                                if (toggleBehaviour) {
                                    console.log('Toggle behavior - storing original styles');
                                    whitelist.forEach((property) => {
                                        targetElement.style[property] &&
                                            targetElement.setAttribute(
                                                `data-original-${property}`,
                                                targetElement.style[property] || ""
                                            );

                                        if (newCSSObject.hasOwnProperty(property)) {
                                            targetElement.setAttribute(
                                                `data-original-${property}`,
                                                targetElement.style[property] || ""
                                            );
                                            targetElement.style.setProperty(property, newCSSObject[property]);
                                            delete newCSSObject[property];
                                        }
                                    });

                                    // Store original non-whitelisted styles
                                    targetElement.setAttribute(
                                        "data-original-styles",
                                        JSON.stringify(existingCSSObject)
                                    );
                                } else {
                                    console.log('Direct style application (no toggle)');
                                    // Non-toggle behavior - apply styles directly
                                    whitelist.forEach((property) => {
                                        if (newCSSObject.hasOwnProperty(property)) {
                                            console.log('Setting style property:', property, newCSSObject[property]);
                                            targetElement.style.setProperty(property, newCSSObject[property]);
                                            delete newCSSObject[property];
                                        }
                                    });
                                }

                                // Apply remaining CSS properties
                                const mergedCSSObject = {
                                    ...existingCSSObject,
                                    ...newCSSObject
                                };
                                const mergedCSSString = generateCSSString(mergedCSSObject);
                                console.log('Merged CSS string:', mergedCSSString);
                                styleNode.textContent = `${targetSelector} { ${mergedCSSString} }`;

                                if (toggleBehaviour) {
                                    targetElement.setAttribute(toggleStateAttr, "true");
                                }
                            }
                        } else {
                            console.error('Target element not found:', targetSelector);
                        }
                    });
                } catch (error) {
                    console.error('Error handling link action:', error);
                }
            };

            // Add event listeners to components
            document.addEventListener('DOMContentLoaded', function() {
                console.log('DOM content loaded, attaching event listeners');

                // Initialize slider states first

                // Initialize states for main slider containers




                // Setup slider onClick event listeners


                // Setup slider onMount functions


                // Setup other event listeners

                // Add click listener for page-404-e-62
                const page_404_e_62Element = document.querySelector('.page-404-e-62');
                console.log('Looking for element with class: .page-404-e-62', page_404_e_62Element);

                if (page_404_e_62Element) {
                    console.log('Adding click listener to page-404-e-62');
                    page_404_e_62Element.addEventListener('click', handleLinkClickAction);

                    // Store link action data if it exists and has toggle behavior
                    const linkActionData = {
                        "action-3bbf37fa-fc2d-42bd-91f4-1a550411319b": {
                            "actionId": "action-3bbf37fa-fc2d-42bd-91f4-1a550411319b",
                            "titleType": "onClick",
                            "actionType": "onClick",
                            "selectedUpdateOption": "hideElement",
                            "targetElementId": "page-404-e-55",
                            "cssCode": "display:none;",
                            "toggleBehaviour": false
                        }
                    };

                    // Check if any action has toggleBehaviour=true
                    const hasToggleAction = Object.values(linkActionData).some(action => action.toggleBehaviour === true);

                    console.log('Link action data for page-404-e-62:', linkActionData);
                    console.log('Has toggle behavior:', hasToggleAction);

                    // Only add data-link-action for all actions 
                    if (Object.keys(linkActionData).length > 0) {
                        console.log('Setting data-link-action attribute');
                        page_404_e_62Element.setAttribute('data-link-action', JSON.stringify(linkActionData));
                    }
                }

                // Add click listener for page-404-e-63
                const page_404_e_63Element = document.querySelector('.page-404-e-63');
                console.log('Looking for element with class: .page-404-e-63', page_404_e_63Element);

                if (page_404_e_63Element) {
                    console.log('Adding click listener to page-404-e-63');
                    page_404_e_63Element.addEventListener('click', handleLinkClickAction);

                    // Store link action data if it exists and has toggle behavior
                    const linkActionData = {
                        "action-29da6019-b1a8-4368-93f8-2f58acc166af": {
                            "actionId": "action-29da6019-b1a8-4368-93f8-2f58acc166af",
                            "titleType": "onClick",
                            "actionType": "onClick",
                            "selectedUpdateOption": "hideElement",
                            "targetElementId": "page-404-e-55",
                            "cssCode": "display:none;",
                            "toggleBehaviour": false
                        }
                    };

                    // Check if any action has toggleBehaviour=true
                    const hasToggleAction = Object.values(linkActionData).some(action => action.toggleBehaviour === true);

                    console.log('Link action data for page-404-e-63:', linkActionData);
                    console.log('Has toggle behavior:', hasToggleAction);

                    // Only add data-link-action for all actions 
                    if (Object.keys(linkActionData).length > 0) {
                        console.log('Setting data-link-action attribute');
                        page_404_e_63Element.setAttribute('data-link-action', JSON.stringify(linkActionData));
                    }
                }

                // Add click listener for page-404-e-54
                const page_404_e_54Element = document.querySelector('.page-404-e-54');
                console.log('Looking for element with class: .page-404-e-54', page_404_e_54Element);

                if (page_404_e_54Element) {
                    console.log('Adding click listener to page-404-e-54');
                    page_404_e_54Element.addEventListener('click', handleLinkClickAction);

                    // Store link action data if it exists and has toggle behavior
                    const linkActionData = {
                        "action-a02df975-0d84-4050-b88c-8aa75e136e79": {
                            "actionId": "action-a02df975-0d84-4050-b88c-8aa75e136e79",
                            "titleType": "onClick",
                            "actionType": "onClick",
                            "selectedUpdateOption": "showElement",
                            "targetElementId": "page-404-e-55",
                            "cssCode": "display:flex;",
                            "toggleBehaviour": false
                        }
                    };

                    // Check if any action has toggleBehaviour=true
                    const hasToggleAction = Object.values(linkActionData).some(action => action.toggleBehaviour === true);

                    console.log('Link action data for page-404-e-54:', linkActionData);
                    console.log('Has toggle behavior:', hasToggleAction);

                    // Only add data-link-action for all actions 
                    if (Object.keys(linkActionData).length > 0) {
                        console.log('Setting data-link-action attribute');
                        page_404_e_54Element.setAttribute('data-link-action', JSON.stringify(linkActionData));
                    }
                }
            });
        })();
    

// Export any available functions or variables
// You may need to manually export specific functions if needed

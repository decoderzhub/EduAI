/**
 * Script Manager for React App
 * Handles loading and managing external scripts converted from HTML
 */

export class ScriptManager {
  constructor() {
    this.loadedScripts = new Set();
  }

  /**
   * Load a script dynamically
   * @param {string} src - Script source path
   * @param {Object} options - Script options (defer, async, etc.)
   * @returns {Promise} - Promise that resolves when script is loaded
   */
  loadScript(src, options = {}) {
    return new Promise((resolve, reject) => {
      if (this.loadedScripts.has(src)) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        this.loadedScripts.add(src);
        resolve();
      };
      script.onerror = reject;

      // Apply options
      if (options.defer) script.defer = true;
      if (options.async) script.async = true;
      if (options.type) script.type = options.type;

      document.head.appendChild(script);
    });
  }

  /**
   * Execute inline script code safely
   * @param {string} code - Script code to execute
   * @param {string} id - Unique identifier for the script
   */
  executeInlineScript(code, id) {
    if (this.loadedScripts.has(id)) {
      return;
    }

    try {
      // Create a script element for inline code
      const script = document.createElement('script');
      script.textContent = code;
      script.id = id;
      document.head.appendChild(script);
      this.loadedScripts.add(id);
    } catch (error) {
      console.error(`Error executing script ${id}:`, error);
    }
  }

  /**
   * Remove a loaded script
   * @param {string} src - Script source or ID to remove
   */
  removeScript(src) {
    const script = document.querySelector(`script[src="${src}"], script[id="${src}"]`);
    if (script) {
      script.remove();
      this.loadedScripts.delete(src);
    }
  }

  /**
   * Check if a script is loaded
   * @param {string} src - Script source or ID
   * @returns {boolean}
   */
  isLoaded(src) {
    return this.loadedScripts.has(src);
  }
}

// Export a singleton instance
export const scriptManager = new ScriptManager();
export default scriptManager;
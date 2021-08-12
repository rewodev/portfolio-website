/**
 * Describes a menu item.
 */
export interface MenuItem {
  /**
   * The label as translation string.
   */
  label: string;

  /**
   * The component name.
   */
  componentName: string;

  /**
   * The page/section link.
   */
  link: string;
}

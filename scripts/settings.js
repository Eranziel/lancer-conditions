export const registerSettings = function() {
  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("lancer-conditions", "keepStockIcons", {
    name: "Keep Stock Icons",
    scope: "world",
    type: Boolean,
    default: false
  });


}

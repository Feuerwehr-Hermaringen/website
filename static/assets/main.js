/*
  Nur das Nötigste an JavaScript - fuer das Aufklappen der Navigation.
  Die Website funktioniert auch ohne JavaScript (die Links bleiben erreichbar).
*/
(function () {
  "use strict";

  // --- Hauptmenue auf Handy/Tablet auf- und zuklappen ---
  var schalter = document.querySelector(".menue-schalter");
  var nav = document.getElementById("hauptnavigation");

  if (schalter && nav) {
    schalter.addEventListener("click", function () {
      var offen = nav.classList.toggle("offen");
      schalter.setAttribute("aria-expanded", offen ? "true" : "false");
    });
  }

  // --- Untermenues (Aufklapppunkte ohne eigenen Link) ---
  var unterSchalter = document.querySelectorAll(".untermenue-schalter");
  Array.prototype.forEach.call(unterSchalter, function (btn) {
    btn.addEventListener("click", function () {
      var punkt = btn.closest(".hauptnav__punkt");
      var offen = punkt.classList.toggle("offen");
      btn.setAttribute("aria-expanded", offen ? "true" : "false");
    });
  });

  // Klick ausserhalb der Navigation schliesst offene Untermenues (nur Desktop-Klappmenue)
  document.addEventListener("click", function (e) {
    if (e.target.closest(".hauptnav__punkt")) return;
    document.querySelectorAll(".hauptnav__punkt.offen").forEach(function (p) {
      p.classList.remove("offen");
      var b = p.querySelector(".untermenue-schalter");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  });

  // Taste "Escape" schliesst Menues
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (nav) nav.classList.remove("offen");
    if (schalter) schalter.setAttribute("aria-expanded", "false");
    document.querySelectorAll(".hauptnav__punkt.offen").forEach(function (p) {
      p.classList.remove("offen");
    });
  });
})();

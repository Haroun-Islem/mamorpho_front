$(document).ready(function () {
  $("#show").click(function () {
    $(".show-commentary").removeClass("visually-hidden");
  });

  $(document).click(function (event) {
    var target = $(event.target);
    if (!target.closest(".show-commentary").length && !target.is("#show")) {
      $(".show-commentary").addClass("visually-hidden");
    }
  });
});

$("#nos_suggestions").click(function () {
  $("#section_1").addClass("visually-hidden");
  $("#section_2").removeClass("visually-hidden");
});

$("#decouvrir").click(function () {
  $("#section_2").addClass("visually-hidden");
  $("#section_1").removeClass("visually-hidden");
});

let compteur = 0;
$(".ico_2").click(function () {
  if (compteur === 0) {
    compteur = 1;
    $(".ico_2").css("color", "red");
  } else {
    compteur = 0;
    $(".ico_2").css("color", "white");
  }
});

$("#fav").click(function () {
  $("#mes_photos").addClass("visually-hidden");
  $("#tenue_1").removeClass("visually-hidden");
  $(".lien-4").addClass("fw-bolder");
  $(".lien-3").removeClass("fw-bolder");
});

$("#tenue").click(function () {
  $("#tenue_1").addClass("visually-hidden");
  $("#mes_photos").removeClass("visually-hidden");
  $(".lien-3").addClass("fw-bolder");
  $(".lien-4").removeClass("fw-bolder");
});

$("#form-1").submit(function (event) {
  event.preventDefault();
  // Autres traitements ou envoi du formulaire via AJAX
});
$("#creat_account").click(function () {
  let nom = $("#nom").val();
  let prenom = $("#prenom").val();
  let email = $("#email").val();
  let password = $("#password").val();

  if (nom === "" || prenom === "" || email === "" || password === "") {
    $("#notif3").removeClass("visually-hidden").fadeIn();
    // Disparaître après 3 secondes (3000 millisecondes)
    setTimeout(function () {
      $("#notif3").fadeOut();
    }, 3000);
    return;
  }
  const user = {
    first_name: nom,
    name: prenom,
    email: email,
    password: password,
  };

  console.log(user);

  console.log("je suis la");

  fetch("http://localhost:3001/api/users/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Utilisateur enregistré avec succès");
        $("#notif1")
          .removeClass("visually-hidden") // Supprime la classe visually-hidden pour rendre l'élément visible
          .fadeIn()
          .delay(3000)
          .fadeOut(function () {
            $(this).addClass("visually-hidden"); // Ajoute à nouveau la classe visually-hidden pour masquer l'élément
          });
        // Traitez la réponse de l'API si nécessaire
      } else {
        console.error("Erreur lors de l'enregistrement de l'utilisateur");
        // Traitez l'erreur si nécessaire
        $("#notif2")
          .removeClass("visually-hidden") // Supprime la classe visually-hidden pour rendre l'élément visible
          .fadeIn()
          .delay(4000)
          .fadeOut(function () {
            $(this).addClass("visually-hidden"); // Ajoute à nouveau la classe visually-hidden pour masquer l'élément
          });
      }
    })
    .catch((error) => {
      console.error(
        "Erreur lors de l'enregistrement de l'utilisateur :",
        error
      );
      // Traitez l'erreur si nécessaire
    });
});

$(document).ready(function() {
    // Función para cambiar de conversación al hacer clic en un elemento de la lista
    $(".conversation-item").click(function() {
      // Eliminar la clase "active" de todos los elementos de la lista
      $(".conversation-item").removeClass("active");
      // Añadir la clase "active" al elemento clickeado
      $(this).addClass("active");
      // Actualizar la imagen y el nombre del usuario en la conversación actual
      var imgSrc = $(this).find(".conversation-img").attr("src");
      var userName = $(this).find(".conversation-name").text();
      $(".current-user-img").attr("src", imgSrc);
      $(".current-user-name").text(userName);
      // Actualizar los mensajes en la conversación actual
      var conversationId = $(this).attr("data-conversation-id");
      $(".message-item").removeClass("receiver");
      $(".message-item[data-conversation-id='" + conversationId + "']").addClass("receiver");
      // Actualizar el contador de mensajes no leídos
      var unreadCount = $(this).find(".unread-count").text();
      if (unreadCount !== "") {
        $(this).find(".unread-count").text("");
        var totalUnreadCount = $(".conversation-list .unread-count").text();
        totalUnreadCount = parseInt(totalUnreadCount) - parseInt(unreadCount);
        $(".conversation-list .unread-count").text(totalUnreadCount);
        document.title = userName + " - Chat App";
      }
    });
    
    // Función para enviar un nuevo mensaje en la conversación actual
    $(".send-message").click(function() {
      var messageText = $(".message-input").val();
      if (messageText !== "") {
        var conversationId = $(".conversation-item.active").attr("data-conversation-id");
        var messageItem = '<div class="message-item sender" data-conversation-id="' + conversationId + '">' + messageText + '</div>';
        $(".message-list").append(messageItem);
        $(".message-input").val("");
        // Simular una respuesta del receptor después de 1 segundo
        setTimeout(function() {
          var responseItem = '<div class="message-item receiver" data-conversation-id="' + conversationId + '">¡Hola! ¿Cómo estás?</div>';
          $(".message-list").append(responseItem);
        }, 1000);
      }
    });
  });
  
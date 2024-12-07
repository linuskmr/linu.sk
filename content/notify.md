+++
title = "Notify"
description = "Get push notifications for updates"
+++


# Activate Notifications

This site can send you a push notification for updates like a new blog post. These notifications are set to *silent*, because they are not important enough to interrupt you.


<button onclick="enableNotifications()">Enable notifications for updates</button>
<p>Notification access: <code id="status"></code></p>
<button onclick="sendDemoNotification()">Send demo notification</button><br>


# Technical Details

This site uses a combination of [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), the [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API), and the [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) to send push notifications.
See [issue #2](https://github.com/linuskmr/linu.sk/issues/2) of this website's repository for details.

<script src="/notify/subscribe.js"></script>
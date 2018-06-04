import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native';


const NOTIFICATION_KEY = 'MobileFlashCards:DailyNotification'

export const rescheduleLocalNotification = () => {
    AsyncStorage.removeItem(NOTIFICATION_KEY).then(setLocalNotification)    
}


export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(21)
              tomorrow.setMinutes(0)
              Notifications.scheduleLocalNotificationAsync(
                {
                  title: 'Train your brain!',
                  body: "Don't forget to do at least one quiz today!",
                  ios: {
                    sound: true,
                  },
                  android: {
                    sound: true,
                    priority: 'high',
                    sticky: false,
                    vibrate: true,
                  }
                },
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
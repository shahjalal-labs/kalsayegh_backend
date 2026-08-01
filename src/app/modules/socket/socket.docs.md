### Fetch all conversations

> Sender send

```json
{ "type": "conversation" }
```

> Sender recieved

```json
{
  "type": "conversation",
  "conversations": [
    {
      "roomId": "6a60eadd7b0d47cbe99fc2f5",
      "roomType": "Group",
      "roomName": "Ls Tech",
      "roomPhoto": "https://api.zenexcloud.com/emdadullah/uploads/group/photos/1784736477313-u6el6yqwslb.jpg",
      "members": [
        {
          "id": "69cdf6533266564213c476d3",
          "fullName": "John Doe",
          "profileImage": "https://api.zenexcloud.com/emdadullah/uploads/users/profileImage/1775463064682-oe46xsyw29b.jpeg",
          "isActive": false
        },
        {
          "id": "6a5efa5c215ab92b5841ff11",
          "fullName": "Neela Rani",
          "profileImage": "https://api.zenexcloud.com/emdadullah/uploads/users/profileImage/1784609344694-pv67112zo2j.jpg",
          "isActive": false
        },
        {
          "id": "6a5ed2bf4e88c48a6683ab83",
          "fullName": "Rabbi",
          "profileImage": null,
          "isActive": false
        }
      ],
      "partner": null,
      "lastMessage": null,
      "unreadCount": 0
    },
    {
      "roomId": "6a60eadd7b0d47cbe99fc2f5",
      "roomType": "Group",
      "roomName": "Ls Tech",
      "roomPhoto": "https://api.zenexcloud.com/emdadullah/uploads/group/photos/1784736477313-u6el6yqwslb.jpg",
      "members": [
        {
          "id": "69cdf6533266564213c476d3",
          "fullName": "John Doe",
          "profileImage": "https://api.zenexcloud.com/emdadullah/uploads/users/profileImage/1775463064682-oe46xsyw29b.jpeg",
          "isActive": false
        },
        {
          "id": "6a5efa5c215ab92b5841ff11",
          "fullName": "Neela Rani",
          "profileImage": "https://api.zenexcloud.com/emdadullah/uploads/users/profileImage/1784609344694-pv67112zo2j.jpg",
          "isActive": false
        },
        {
          "id": "6a5ed2bf4e88c48a6683ab83",
          "fullName": "Rabbi",
          "profileImage": null,
          "isActive": false
        }
      ],
      "partner": null,
      "lastMessage": null,
      "unreadCount": 0
    }
  ]
}
```

---

### Join a room and load messages

> Sender send

```json
{
  "type": "subscribe",
  "roomId": "string"
}
```

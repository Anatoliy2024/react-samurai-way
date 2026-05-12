export const getTrackDetails = (selectedTrackId: string) => {
  console.log(selectedTrackId)
  const promise = Promise.resolve({
    data: {
      id: "1",
      attributes: {
        title: "первая песня",
        lyrics: "текст первой песни",
        attachments: [
          {
            url: "https://fine.sunproxy.net/file/QjFMMFBESW1pMHNIT1dRT1l0Y2FaOEFVVnA1Z1E1eXp1ek82MnNJYUh1VnBVT2tyLzhlOGphbUQ5Rm01eTRZWEJxV1ZkRWFoLysrQzUxZEgyNHIxNUQwOWlPTTR2bnFjeUcxTEtBZ3FaZWc9/Nina_Brodskaya_-_s_lyubovyu_vstretitsya_problema_trudnaya_(SkySound.cc).mp3",
          },
        ],
      },
    },
  })

  return promise
}

export const getTrackLists = () => {
  const promise = Promise.resolve({
    data: [
      {
        id: "1",
        attributes: {
          title: "первая песня",
          lyrics: "текст первой песни",
          attachments: [
            {
              url: "https://fine.sunproxy.net/file/QjFMMFBESW1pMHNIT1dRT1l0Y2FaOEFVVnA1Z1E1eXp1ek82MnNJYUh1VnBVT2tyLzhlOGphbUQ5Rm01eTRZWEJxV1ZkRWFoLysrQzUxZEgyNHIxNUQwOWlPTTR2bnFjeUcxTEtBZ3FaZWc9/Nina_Brodskaya_-_s_lyubovyu_vstretitsya_problema_trudnaya_(SkySound.cc).mp3",
            },
          ],
        },
      },
      {
        id: "2",
        attributes: {
          title: "Вторая песня",
          lyrics: "текст второй песни",
          attachments: [
            {
              url: "https://fine.sunproxy.net/file/QjFMMFBESW1pMHNIT1dRT1l0Y2FaOEFVVnA1Z1E1eXp1ek82MnNJYUh1VnBVT2tyLzhlOGphbUQ5Rm01eTRZWEJxV1ZkRWFoLysrQzUxZEgyNHIxNUQwOWlPTTR2bnFjeUcxTEtBZ3FaZWc9/Nina_Brodskaya_-_s_lyubovyu_vstretitsya_problema_trudnaya_(SkySound.cc).mp3",
            },
          ],
        },
      },
      {
        id: "3",
        attributes: {
          title: "Третья песня",
          lyrics: "текст третьей песни",
          attachments: [
            {
              url: "https://fine.sunproxy.net/file/QjFMMFBESW1pMHNIT1dRT1l0Y2FaOEFVVnA1Z1E1eXp1ek82MnNJYUh1VnBVT2tyLzhlOGphbUQ5Rm01eTRZWEJxV1ZkRWFoLysrQzUxZEgyNHIxNUQwOWlPTTR2bnFjeUcxTEtBZ3FaZWc9/Nina_Brodskaya_-_s_lyubovyu_vstretitsya_problema_trudnaya_(SkySound.cc).mp3",
            },
          ],
        },
      },
      {
        id: "4",
        attributes: {
          title: "Четвёрт песня",
          lyrics: "текст четвёртой песни",
          attachments: [
            {
              url: "https://fine.sunproxy.net/file/QjFMMFBESW1pMHNIT1dRT1l0Y2FaOEFVVnA1Z1E1eXp1ek82MnNJYUh1VnBVT2tyLzhlOGphbUQ5Rm01eTRZWEJxV1ZkRWFoLysrQzUxZEgyNHIxNUQwOWlPTTR2bnFjeUcxTEtBZ3FaZWc9/Nina_Brodskaya_-_s_lyubovyu_vstretitsya_problema_trudnaya_(SkySound.cc).mp3",
            },
          ],
        },
      },
    ],
  })

  return promise
}

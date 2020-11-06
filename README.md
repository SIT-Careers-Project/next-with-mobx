#### ทดลองการเขียน Next.js + mobx + typescript
---------

###### อธิบาย structure

```
front-end-next-typescript (อันนี้ยังไม่ได้สร้างใน project นี้)
|
└─── core
|     |
|     └─── components // เก็บ component ที่ใช้สำหรับ reuse ได้
|     └─── config // เก็บ config ของ project เช่น tsconfig.js tailwind.config.js เป็นต้น
|     └─── style // เก็บพวกไฟล์ css
|
└───features
│       └─── TodoList
│               └───components // เก็บ component ของ feature TodoList
│               └───models // เก็บ Type ของตัวแปรที่ใช้ใน feature TodoList
│               └───services // เอาไว้สำหรับ api ของ feature
│               └───store // ที่เก็บ state ของ TodoList Feature
│
└───pages // เอาไว้เก็บหน้าเพจที่แสดง component
|     └─── api // อันนี้ไม่ต้องสนใจเป็น api mock มาให้เล่นเฉยๆ ถ้าอยากเล่นก็เข้าไปดูได้นะ (localhost:3000/api/todolist) เป็น code ที่ mock เอาไว้ยกตัวอย่างของ feature/TodoList/services เฉยๆ 
|     └─── index.tsx
|     └─── todolist.tsx
|
└─── utils
      └─── api.tsx

```

----- ปล. ลองเทียบกับ sit-careers-frontend ดู


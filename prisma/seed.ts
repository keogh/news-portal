import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "admin@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("123qweasd", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  // Seed for domains

  await prisma.domain.deleteMany({});
  const riodoceDomain = await prisma.domain.create({
    data: {
      name: "riodoce.mx",
    }
  });
  const noroesteDomain = await prisma.domain.create({
    data: {
      name: "noroeste.com.mx",
    },
  });

  await prisma.item.deleteMany({})
  await prisma.item.create({
    data: {
      title: "Emiten alerta en siete estados de México por robo de material radioactivo",
      url: "https://riodoce.mx/2023/03/22/emiten-alerta-en-siete-estados-de-mexico-por-robo-de-material-radioactivo/",
      text: "",
      domain: {
        connect: {
          id: riodoceDomain.id,
        }
      },
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });
  await prisma.item.create({
    data: {
      title: "Esta es una discusión",
      url: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque iaculis odio, et vehicula ligula placerat non.",
      domain: {},
      user: {
        connect: {
          id: user.id,
        }
      }
    },
  });
  await prisma.item.create({
    data: {
      title: "Comuneros retiran bloqueo en Presa Santa María",
      url: "https://www.noroeste.com.mx/elsur/comuneros-retiran-bloqueo-en-presa-santa-maria-JK3590803",
      text: "",
      domain: {
        connect: {
          id: noroesteDomain.id,
        }
      },
      user: {
        connect: {
          id: user.id,
        }
      }
    },
  });
  await prisma.item.create({
    data: {
      title: "‘Descontento por calificaciones’, causa de manifestación en ETI 5: directivos",
      url: "https://www.noroeste.com.mx/mazatlan/descontento-por-calificaciones-causa-de-manifestacion-en-eti-5-directivos-YL3591515",
      text: "",
      domain: {
        connect: {
          id: noroesteDomain.id,
        }
      },
      user: {
        connect: {
          id: user.id,
        }
      }
    },
  })

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

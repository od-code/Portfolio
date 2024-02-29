"use client";

import WorkPageClient from "@/client/work";
import { appURL } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import {
  ArrowForwardRounded,
  OpenInNew,
  OpenInNewRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WorkSection() {
  const [isClient, setIsClient] = useState(false);

  const { resolvedTheme } = useNextTheme();
  const { palette } = useTheme();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Box
      sx={{
        py: 5,
        backgroundColor:
          resolvedTheme == "dark"
            ? palette.grey[900]
            : palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <WorkPageClient />
        </Grid>
      </Container>
    </Box>
  );
}

type Props = {
  href: string;
  children: React.ReactNode;
  internal?: boolean;
  color?: boolean;
};

const TypoLink = ({ href, children, internal, color }: Props) => {
  const [isShown, setIsShown] = useState(false);

  const router = useRouter();

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ mb: 1, textDecoration: isShown ? "underline" : "none" }}
    >
      <Typography
        color={color ? "primary.main" : "text.primary"}
        sx={{ cursor: "pointer" }}
        onClick={() =>
          internal ? router.replace(`${href}`) : window.open(href, "_blank")
        }
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {children}
      </Typography>
      {internal ? (
        <ArrowForwardRounded
          sx={{
            width: 20,
            height: 20,
            color: color ? "primary.main" : "inherit",
          }}
        />
      ) : (
        <OpenInNew sx={{ width: 16, height: 16 }} />
      )}
    </Stack>
  );
};
// import WorkPageClient from "@/client/work";
// import { appURL } from "@/utilities/constants";
// import { profile } from "@/utilities/content";

// export async function generateMetadata() {
//   return {
//     metadataBase: new URL(appURL),
//     title: `Work History | ${profile.name}`,
//     description: `${profile.work} - ${profile.description}`,
//     openGraph: {
//       images: [{ url: `${appURL}/images/work.png`, alt: profile.work }],
//     },
//     twitter: { card: "summary_large_image", creator: "@codeinfluencer" },
//   };
// }

// export default function WorkPage() {
//   return (
//     <main>
//       <WorkPageClient />
//     </main>
//   );
// }

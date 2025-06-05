import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>RE1.PL</title>
        <meta name="description" content="RE1.PL" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`font-jetbrains antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

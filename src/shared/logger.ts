// update to log object beautifying in console

import { createLogger, format, transports } from "winston";
import util from "util"; // ← built-in, no extra install

export const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "hh:mm:ssA DD-MM-YY" }),
    format.errors({ stack: true }),
    format.splat(), // keep this for %s, %d, %o etc.
    format.json(), // files stay perfect JSON
  ),
  transports: [
    new transports.File({ filename: "logger/error.json", level: "error" }),
    new transports.File({ filename: "logger/log.json" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize({ all: true }),
        format.timestamp({ format: "hh:mm:ssA DD-MM-YY" }),
        format.printf((info) => {
          const { level, message, timestamp, ...meta } = info;

          let metaStr = "";
          if (Object.keys(meta).length > 0) {
            // This is the key: util.inspect makes objects beautiful + colored
            metaStr = `\n${util.inspect(meta, {
              depth: null, // unlimited nesting
              colors: true,
              compact: false,
            })}`;
          }

          return `[${level}]: ${message}${metaStr} ${timestamp} \n${"─".repeat(30)}`;
        }),
      ),
    }),
  );
}

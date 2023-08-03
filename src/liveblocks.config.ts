import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import type { BaseUserMeta } from "@liveblocks/client";

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
 throttle: 16,
});

type CursorPosition = {
  x: number;
  y: number;
};

type Presence = {
  selectedDataset: { cardId: string; dataKey: string } | null;
  cursor: {
    x: number;
    y: number;
  } | null;
  message: string;
  cardId: string | null;
};

type Storage = {
  // animals: LiveList<string>,
  // ...
};
type UserMeta = BaseUserMeta;
type RoomEvent = {
  x: number;
  y: number;
  value: string;
};

export const {
  RoomProvider,
  useMyPresence,
  useOthers,
  useUpdateMyPresence,
  useOthersMapped,
  useOthersConnectionIds,
  useEventListener,
  useBroadcastEvent
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent>(client);

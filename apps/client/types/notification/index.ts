export interface GetNotificationRow {
  id: string;
  notification_id: string;
  cast_type: string;
  provider: string;
  user_ids: string[];
  title: string;
  message: string;
  channel: string[];
  metadata: unknown;
  sender: {
    id: number;
    name: string;
    image: string;
  };
  is_read: boolean;
  read_at: string;
}

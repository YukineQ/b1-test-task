export type ExternalLink = {
    id: number | null;
    kind: string;
    url: string;
    source: string;
    entry_id: number;
    entry_type: string;
    created_at: Date | null;
    updated_at: Date | null;
    imported_at: Date | null;
}
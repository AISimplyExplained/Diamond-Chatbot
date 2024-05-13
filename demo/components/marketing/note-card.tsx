// NoteCard.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

interface NoteCardProps {
    notes: string[];
    mode: 'overwrite' | 'append';
}

export const NoteCard = ({ notes, mode }: NoteCardProps) => {
    const [content, setContent] = useState<string[]>([]);

    useEffect(() => {
        if (mode === 'overwrite') {
            setContent(notes);
        } else if (mode === 'append') {
            setContent(prev => [...prev, ...notes]);
        }
    }, [notes, mode]);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {content.map((note, index) => (
                        <li key={index}>{note}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

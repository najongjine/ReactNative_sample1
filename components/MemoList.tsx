import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

// 🟡 Memo 타입 정의
// 각 메모 항목은 id, text를 가짐
export type Memo = {
  id: number;
  text: string;
};

// 🟡 props 타입 정의
type MemoListProps = {
  memos: Memo[];
  onUpdate: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
};

export default function MemoList({ memos, onUpdate, onDelete }: MemoListProps) {
  // 현재 어떤 메모를 수정 중인지 기억하는 상태
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

  return (
    <FlatList
      data={memos}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 15 }}>
          {editingId === item.id ? (
            <>
              <TextInput
                value={editingText}
                onChangeText={setEditingText}
                style={{ borderWidth: 1, padding: 8, marginBottom: 5 }}
              />
              <Button title="저장" onPress={() => {
                onUpdate(item.id, editingText);
                setEditingId(null);
                setEditingText('');
              }} />
              <Button title="취소" onPress={() => {
                setEditingId(null);
                setEditingText('');
              }} />
            </>
          ) : (
            <>
              <Text style={{ marginBottom: 5 }}>{item.text}</Text>
              <Button title="수정" onPress={() => {
                setEditingId(item.id);
                setEditingText(item.text);
              }} />
              <Button title="삭제" onPress={() => onDelete(item.id)} />
            </>
          )}
        </View>
      )}
    />
  );
}

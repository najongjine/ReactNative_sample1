import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MemoInput from '../../components/MemoInput';
import MemoList from '../../components/MemoList';

type Memo = { id: number; text: string };

export default function MyMemo() {
  const [memos, setMemos] = useState<Memo[]>([]); // 메모 목록
  const [editingMemo, setEditingMemo] = useState<Memo | null>(null); // 수정 중인 메모

  // 메모 추가
  const addMemo = (text: string) => {
    if (text.trim() === '') return;
    setMemos([...memos, { id: Date.now(), text }]);
  };

  // 메모 삭제
  const deleteMemo = (id: number) => {
    setMemos(memos.filter(memo => memo.id !== id));
  };

  // 수정 모드 진입
  const startEditMemo = (memo: Memo) => {
    setEditingMemo(memo);
  };

  // 메모 수정 저장
  const updateMemo = (id: number, newText: string) => {
    setMemos(memos.map(m => m.id === id ? { ...m, text: newText } : m));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* 입력창은 기본으로 추가만 담당 */}
        <MemoInput
          onSubmit={addMemo}
        />
        <MemoList
          memos={memos}
          onDelete={deleteMemo}
          onUpdate={updateMemo}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, padding: 20 },
});

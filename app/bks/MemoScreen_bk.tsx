import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MemoInput from '../../components/MemoInput';
import MemoList from '../../components/MemoList';

type Memo = { id: number; text: string };

export default function MyMemo() {
  const [memos, setMemos] = useState<Memo[]>([]);           // 메모들을 저장하는 배열
  const [editingMemo, setEditingMemo] = useState<Memo | null>(null); // 수정 중인 메모

  // 메모 추가 함수
  const addMemo = (text: string) => {
    if (text.trim() === '') return;
    setMemos([...memos, { id: Date.now(), text }]);  // 새로운 메모를 추가
  };

  // 메모 삭제 함수
  const deleteMemo = (id: number) => {
    setMemos(memos.filter((memo) => memo.id !== id)); // 해당 id만 제거
  };

  // 메모 수정 시작
  const startEditMemo = (memo: Memo) => {
    setEditingMemo(memo); // 수정 모드로 진입
  };

  // 메모 수정 완료 (저장)
  const updateMemo = (text: string) => {
    if (!editingMemo) return;
    setMemos(
      memos.map((memo) =>
        memo.id === editingMemo.id ? { ...memo, text } : memo
      )
    );
    setEditingMemo(null); // 수정 완료 후 초기화
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* 입력창: 추가 또는 수정 모드 */}
        <MemoInput
          onSubmit={editingMemo ? updateMemo : addMemo}
          editingText={editingMemo?.text}
        />
        {/* 리스트: 삭제, 수정 버튼 있음 */}
        <MemoList
          memos={memos}
          onDelete={deleteMemo}
          onEdit={startEditMemo}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, padding: 20 },
});
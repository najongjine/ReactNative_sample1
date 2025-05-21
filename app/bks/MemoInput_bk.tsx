import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface Props {
  onSubmit: (text: string) => void;
  editingText?: string;
}

export default function MemoInput({ onSubmit, editingText }: Props) {
  const [text, setText] = useState('');

  // 수정 중이면 텍스트 입력창에 기존 내용 넣기. "editingText가 바뀌면, 입력창(setText)에 그 값을 넣어줘!"
  useEffect(() => {
    setText(editingText ?? '');
  }, [editingText]);

  const handlePress = () => {
    onSubmit(text);  // 부모(App.tsx)로 보냄
    setText('');     // 입력창 비움
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="메모를 입력하세요"
        value={text}
        onChangeText={setText}
      />
      <Button title={editingText ? '수정' : '추가'} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row', marginBottom: 20 },
  input: {
    flex: 1,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});
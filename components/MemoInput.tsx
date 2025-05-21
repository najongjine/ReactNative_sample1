import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface Props {
  onSubmit: (text: string) => void;
  editingText?: string;
}

export default function MemoInput({ onSubmit, editingText }: Props) {
  const [text, setText] = useState('');

  // 🔄 editingText가 바뀔 때마다 입력창의 내용을 초기화
  useEffect(() => {
    setText(editingText ?? '');
  }, [editingText]);

  const handlePress = () => {
    onSubmit(text);   // 부모에게 현재 텍스트를 전달
    setText('');      // 입력창 초기화
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

import React from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';

interface Memo {
  id: number;
  text: string;
}

interface Props {
  memos: Memo[];
  onDelete: (id: number) => void;
  onEdit: (memo: Memo) => void;
}

export default function MemoList({ memos, onDelete, onEdit }: Props) {
  return (
    <FlatList
      data={memos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.memoItem}>
          <Text style={styles.memoText}>{item.text}</Text>
          <View style={styles.buttonGroup}>
            <Button title="수정" onPress={() => onEdit(item)} />
            <View style={{ width: 10 }} />
            <Button title="삭제" color="red" onPress={() => onDelete(item.id)} />
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  memoItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
  },
  memoText: {
    marginBottom: 5,
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
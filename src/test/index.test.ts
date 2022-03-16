import zhConvertor from '../index';

test('Convert Simp.Ch. to Trad.Ch.: ', () => {
  expect(zhConvertor.s2t('野兽')).toBe('野獸');
  expect(zhConvertor.s2t('测试')).toBe('測試');
  expect(zhConvertor.s2t('测试测试测试')).toBe('測試測試測試');

  // 后 後
  expect(zhConvertor.s2t('后面')).toBe('後面');
  expect(zhConvertor.s2t('天后')).toBe('天后');

  // 發 髪
  expect(zhConvertor.s2t('发现')).toBe('發現');
  expect(zhConvertor.s2t('发行')).toBe('發行');
  expect(zhConvertor.s2t('头发')).toBe('頭髮');

  // 並 幷 併

  // ..
});

test('Convert Trad.Ch. to Simp.Ch.: ', () => {
  expect(zhConvertor.t2s('前輩')).toBe('前辈');
  expect(zhConvertor.t2s('測試')).toBe('测试');
  expect(zhConvertor.t2s('測試測試測試')).toBe('测试测试测试');
});

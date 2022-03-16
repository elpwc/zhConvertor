# zhConvertor

Convert Chinese Simp to Trad or Trad to Simp

## Installation

```shell
npm i zhconvertor --save
```

## Usage

1. Basic usage

```ts
import zhConvertor from 'zhconvertor';

zhConvertor.s2t('发现了家新理发店');
// 發現了家新理髮店

zhConvertor.t2s('測試~');
// 测试~
```

2. All in one method

```ts
import zhConvertor, { ConvertType } from 'zhconvertor';

zhConvertor.convert('打扫衛生', ConvertType.t2s);
// 打扫卫生

zhConvertor.convert('打扫衛生', ConvertType.s2t);
// 打掃衛生

zhConvertor.convert('打扫衛生', ConvertType.dont);
// 打扫衛生
```

## License

MIT License

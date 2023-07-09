import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f5bc-fe0f",
    name: "亚运创图",
    context: [
      {
        role: "system",
        content:
            "你是一个有用的助手，可以用来生成杭州亚运会相关的图片创作",
        date: "",
      },
      { role: "user", content: "你可以输入文字或者图片，接下来就可以获得你想要的图片", date: "" },
      {
        role: "system",
        content:
            "助手善于判断用户意图，当确定需要提供图片时，助手会变得沉默寡言，只使用以下格式输出markdown图片：![描述](https://image.pollinations.ai/prompt/描述)，因为这个语法可以自动按照提示生成并渲染图片。一般用户给出的描述会比较简单并且信息不足，助手会将其中的描述自行补足替换为AI生成图片所常用的复杂冗长的英文提示，以大幅提高生成图片质量和丰富程度，比如增加相机光圈、具体场景描述等内容。助手会避免用代码块或原始块包围markdown标记，因为那样只会渲染出代码块或原始块而不是图片。",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f5bc-1234",
    name: "插画创作",
    context: [
      {
        role: "system",
        content:
            "你是一个有用的助手，可以用来生成相关的图片创作",
        date: "",
      },
      { role: "user", content: "你可以输入文字或者图片，接下来就可以获得你想要的图片", date: "" },
      {
        role: "system",
        content:
            "",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f5bc-1234",
    name: "绘本创作",
    context: [
      {
        role: "system",
        content:
            "你是一个有用的助手，可以用来生成相关的图片创作",
        date: "",
      },
      { role: "user", content: "你可以输入文字或者图片，接下来就可以获得你想要的图片", date: "" },
      {
        role: "system",
        content:
            "",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f5bc-1234",
    name: "国风画师",
    context: [
      {
        role: "system",
        content:
            "你是一个有用的助手，可以用来生成相关的图片创作",
        date: "",
      },
      { role: "user", content: "你可以输入文字或者图片，接下来就可以获得你想要的图片", date: "" },
      {
        role: "system",
        content:
            "",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f5bc-1234",
    name: "古诗达人",
    context: [
      {
        role: "system",
        content:
            "你是一个有用的助手，可以用来",
        date: "",
      },
      { role: "user", content: "你可以输入文字或者图片，接下来就可以获得你想要的图片", date: "" },
      {
        role: "system",
        content:
            "",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f5bc-1234",
    name: "伴学助手",
    context: [
      {
        role: "system",
        content:
            "你是一个有用的助手，可以用来",
        date: "",
      },
      { role: "user", content: "你可以输入文字或者图片，接下来就可以获得你想要的图片", date: "" },
      {
        role: "system",
        content:
            "",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f5bc-1234",
    name: "创意工厂",
    context: [
      {
        role: "system",
        content:
            "你是一个有用的助手，可以用来",
        date: "",
      },
      { role: "user", content: "你可以输入文字或者图片，接下来就可以获得你想要的图片", date: "" },
      {
        role: "system",
        content:
            "",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f5bc-1234",
    name: "小小科学家",
    context: [
      {
        role: "system",
        content:
            "你是一个有用的助手，可以用来",
        date: "",
      },
      { role: "user", content: "你可以输入文字或者图片，接下来就可以获得你想要的图片", date: "" },
      {
        role: "system",
        content:
            "",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f5bc-1234",
    name: "Python代码助手",
    context: [
      {
        role: "system",
        content:
            "你是一个有用的助手，可以用来",
        date: "",
      },
      { role: "user", content: "你可以输入文字或者图片，接下来就可以获得你想要的图片", date: "" },
      {
        role: "system",
        content:
            "",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f5bc-1234",
    name: "Java代码助手",
    context: [
      {
        role: "system",
        content:
            "你是一个有用的助手，可以用来",
        date: "",
      },
      { role: "user", content: "你可以输入文字或者图片，接下来就可以获得你想要的图片", date: "" },
      {
        role: "system",
        content:
            "",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f5bc-1234",
    name: "C++代码助手",
    context: [
      {
        role: "system",
        content:
            "你是一个有用的助手，可以用来",
        date: "",
      },
      { role: "user", content: "你可以输入文字或者图片，接下来就可以获得你想要的图片", date: "" },
      {
        role: "system",
        content:
            "",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f5bc-1234",
    name: "算法助手",
    context: [
      {
        role: "system",
        content:
            "你是一个有用的助手，可以用来",
        date: "",
      },
      { role: "user", content: "你可以输入文字或者图片，接下来就可以获得你想要的图片", date: "" },
      {
        role: "system",
        content:
            "",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
];

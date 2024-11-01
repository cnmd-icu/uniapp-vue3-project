module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 'subject-case': [0, 'never'],
    'type-enum': [
      2, // 代表必须输入
      'always',
      [
        'feat', // 一个新的特性
        'fix', // 修复一个Bug
        'test', // 添加一个测试
        'docs', // 变更的只有文档
        'refactor', // 代码重构，注意和特性、修复区分开
        'build', // 修改项目构建系统配置
        'ci', // 修改项目继续集成流程
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回滚到上一个版本
        'perf', // 优化相关，比如提升性能、体验
        'style' // 仅仅修改了空格、格式缩进、逗号等，不改变代码逻辑
      ]
    ]
  }
};

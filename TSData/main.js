var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var Task = /** @class */ (function () {
    function Task(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    Task.prototype.perform = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("Performing: ".concat(this.title));
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, _this.duration * 1000); })];
            });
        });
    };
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TaskManager.prototype.calculateTotalTime = function () {
        return this.tasks.reduce(function (total, task) { return total + task.duration; }, 0);
    };
    TaskManager.prototype.printTasks = function () {
        this.tasks.forEach(function (task, index) {
            console.log("".concat(index + 1, ". ").concat(task.title, " - ").concat(task.duration, " minutes"));
        });
    };
    TaskManager.prototype.performTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, task;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.tasks;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        task = _a[_i];
                        return [4 /*yield*/, task.perform()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return TaskManager;
}());
var main = function () { return __awaiter(_this, void 0, void 0, function () {
    var manager;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Welcome to the Task Calculator!");
                manager = new TaskManager();
                manager.addTask(new Task("Write TypeScript code", 1)); // 1 хвилина
                manager.addTask(new Task("Debug application", 2)); // 2 хвилини
                manager.addTask(new Task("Push code to GitHub", 1)); // 1 хвилина
                console.log("\nTasks:");
                manager.printTasks();
                console.log("\nTotal time required:", manager.calculateTotalTime(), "minutes");
                console.log("\nPerforming tasks...");
                return [4 /*yield*/, manager.performTasks()];
            case 1:
                _a.sent();
                console.log("All tasks completed!");
                return [2 /*return*/];
        }
    });
}); };
main();

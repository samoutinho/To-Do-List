<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    private $task;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    public function index()
    {
        return $this->task->paginate(10);
    }

    public function show($task)
    {
        return $this->task->find($task);
    }

    public function store(Request $request)
    {
        //return $request->all();
        $this->task->create($request->all());
        return response()->json(['data' => ['message' => 'Task criada!']]);
    }

    public function update($task, Request $request)
    {
        $task = $this->task->find($task);
        $task->update($request->all());
        return response()->json(['data' => ['message' => 'Task atualizada!']]);
    }

    public function destroy($task)
    {
        $task = $this->task->find($task);
        $task->delete();
        return response()->json(['data' => ['message' => 'Task removido!']]);
    }
}

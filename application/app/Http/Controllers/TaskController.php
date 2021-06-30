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
        return response()->json(['data' => ['message' => 'Task criada com sucesso!']]);
    }

    public function update($task)
    {
        //return $this->task->find($task);
    }

    public function destroy($task)
    {
        //return $this->task->find($task);
    }
}

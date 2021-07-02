<?php

namespace Database\Seeders;

use App\Models\Task;
use Carbon\Factory;
use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Task::factory()->count(30)->create();
    }
}
